import type { GraphQLResolveInfo } from "graphql";
import { GroupByDashboardjsonArgs } from "./args/GroupByDashboardjsonArgs";
import { DashboardjsonGroupBy } from "../../outputs/DashboardjsonGroupBy";
export declare class GroupByDashboardjsonResolver {
    groupByDashboardjson(ctx: any, info: GraphQLResolveInfo, args: GroupByDashboardjsonArgs): Promise<DashboardjsonGroupBy[]>;
}
