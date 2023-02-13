import type { GraphQLResolveInfo } from "graphql";
import { GroupByDashboardslistArgs } from "./args/GroupByDashboardslistArgs";
import { DashboardslistGroupBy } from "../../outputs/DashboardslistGroupBy";
export declare class GroupByDashboardslistResolver {
    groupByDashboardslist(ctx: any, info: GraphQLResolveInfo, args: GroupByDashboardslistArgs): Promise<DashboardslistGroupBy[]>;
}
