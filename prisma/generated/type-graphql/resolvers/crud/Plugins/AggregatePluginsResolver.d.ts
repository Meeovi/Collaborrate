import { GraphQLResolveInfo } from "graphql";
import { AggregatePluginsArgs } from "./args/AggregatePluginsArgs";
import { AggregatePlugins } from "../../outputs/AggregatePlugins";
export declare class AggregatePluginsResolver {
    aggregatePlugins(ctx: any, info: GraphQLResolveInfo, args: AggregatePluginsArgs): Promise<AggregatePlugins>;
}
