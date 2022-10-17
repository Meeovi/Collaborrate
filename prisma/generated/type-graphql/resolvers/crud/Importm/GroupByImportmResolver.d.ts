import { GraphQLResolveInfo } from "graphql";
import { GroupByImportmArgs } from "./args/GroupByImportmArgs";
import { ImportmGroupBy } from "../../outputs/ImportmGroupBy";
export declare class GroupByImportmResolver {
    groupByImportm(ctx: any, info: GraphQLResolveInfo, args: GroupByImportmArgs): Promise<ImportmGroupBy[]>;
}
