import { GraphQLResolveInfo } from "graphql";
import { GroupByDashboardsArgs } from "./args/GroupByDashboardsArgs";
import { DashboardsGroupBy } from "../../outputs/DashboardsGroupBy";
export declare class GroupByDashboardsResolver {
    groupByDashboards(ctx: any, info: GraphQLResolveInfo, args: GroupByDashboardsArgs): Promise<DashboardsGroupBy[]>;
}
