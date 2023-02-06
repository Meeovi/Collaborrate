import { GraphQLResolveInfo } from "graphql";
import { GroupByPluginsArgs } from "./args/GroupByPluginsArgs";
import { PluginsGroupBy } from "../../outputs/PluginsGroupBy";
export declare class GroupByPluginsResolver {
    groupByPlugins(ctx: any, info: GraphQLResolveInfo, args: GroupByPluginsArgs): Promise<PluginsGroupBy[]>;
}
