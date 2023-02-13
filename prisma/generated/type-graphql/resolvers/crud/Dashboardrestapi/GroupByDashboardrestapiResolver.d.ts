import type { GraphQLResolveInfo } from "graphql";
import { GroupByDashboardrestapiArgs } from "./args/GroupByDashboardrestapiArgs";
import { DashboardrestapiGroupBy } from "../../outputs/DashboardrestapiGroupBy";
export declare class GroupByDashboardrestapiResolver {
    groupByDashboardrestapi(ctx: any, info: GraphQLResolveInfo, args: GroupByDashboardrestapiArgs): Promise<DashboardrestapiGroupBy[]>;
}
