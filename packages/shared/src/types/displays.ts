import { Component, ComponentOptions } from 'vue';
import { ExtensionOptionsContext } from './extensions';
import { Field, LocalType, Type } from './fields';
import { DeepPartial } from './misc';

export type DisplayFieldsFunction = (
	options: any,
	context: {
		collection: string;
		field: string;
		type: string;
	}
) => string[];

export interface DisplayConfig {
	id: string;
	name: string;
	icon: string;
	description?: string;

	component: Component;
	handler?: (
		value: any,
		options: Record<string, any>,
		ctx: { interfaceOptions?: Record<string, any>; field?: Field; collection?: string }
	) => string | null;
	options:
		| DeepPartial<Field>[]
		| { standard: DeepPartial<Field>[]; advanced: DeepPartial<Field>[] }
		| ((
				ctx: ExtensionOptionsContext
		  ) => DeepPartial<Field>[] | { standard: DeepPartial<Field>[]; advanced: DeepPartial<Field>[] })
		| ComponentOptions
		| null;
	types: readonly Type[];
	localTypes?: readonly LocalType[];
	fields?: string[] | DisplayFieldsFunction;
}
