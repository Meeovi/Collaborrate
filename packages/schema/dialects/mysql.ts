import KnexMySQL, { parseDefaultValue } from 'knex-schema-inspector/dist/dialects/mysql';
import { SchemaOverview } from '../types/overview';
import { SchemaInspector } from '../types/schema';

export default class MySQL extends KnexMySQL implements SchemaInspector {
	async overview(): Promise<SchemaOverview> {
		const columns = await this.knex.raw(
			`
			SELECT
				C.TABLE_NAME as table_name,
				C.COLUMN_NAME as column_name,
				C.COLUMN_DEFAULT as default_value,
				C.IS_NULLABLE as is_nullable,
				C.COLUMN_TYPE as data_type,
				C.COLUMN_KEY as column_key,
				C.CHARACTER_MAXIMUM_LENGTH as max_length,
				C.EXTRA as extra
			FROM
				INFORMATION_SCHEMA.COLUMNS AS C
			LEFT JOIN
				INFORMATION_SCHEMA.TABLES AS T ON C.TABLE_NAME = T.TABLE_NAME
				AND C.TABLE_SCHEMA = T.TABLE_SCHEMA
			WHERE
				T.TABLE_TYPE = 'BASE TABLE' AND
				C.TABLE_SCHEMA = ?;
			`,
			[this.knex.client.database()]
		);

		const overview: SchemaOverview = {};

		for (const column of columns[0]) {
			if (column.table_name in overview === false) {
				const primaryKeys = columns[0].filter((nested: { column_key: string; table_name: string }) => {
					return nested.table_name === column.table_name && nested.column_key === 'PRI';
				});
				overview[column.table_name] = {
					primary: primaryKeys.length !== 1 ? undefined : primaryKeys[0].column_name,
					columns: {},
				};
			}

			let dataType = column.data_type.replace(/\(.*?\)/, '');
			if (column.data_type.startsWith('tinyint(1)')) {
				dataType = 'boolean';
			}

			overview[column.table_name].columns[column.column_name] = {
				...column,
				default_value: column.extra === 'auto_increment' ? 'AUTO_INCREMENT' : parseDefaultValue(column.default_value),
				is_nullable: column.is_nullable === 'YES',
				is_generated: column.extra?.endsWith('GENERATED') ?? false,
				data_type: dataType,
			};
		}

		return overview;
	}
}