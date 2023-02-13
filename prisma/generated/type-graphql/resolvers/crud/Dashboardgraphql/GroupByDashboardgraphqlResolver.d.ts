import type { GraphQLResolveInfo } from "graphql";
import { GroupByDashboardgraphqlArgs } from "./args/GroupByDashboardgraphqlArgs";
import { DashboardgraphqlGroupBy } from "../../outputs/DashboardgraphqlGroupBy";
export declare class GroupByDashboardgraphqlResolver {
    groupByDashboardgraphql(ctx: any, info: GraphQLResolveInfo, args: GroupByDashboardgraphqlArgs): Promise<DashboardgraphqlGroupBy[]>;
}
