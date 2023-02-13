import type { GraphQLResolveInfo } from "graphql";
import { GroupByDashboardslidesArgs } from "./args/GroupByDashboardslidesArgs";
import { DashboardslidesGroupBy } from "../../outputs/DashboardslidesGroupBy";
export declare class GroupByDashboardslidesResolver {
    groupByDashboardslides(ctx: any, info: GraphQLResolveInfo, args: GroupByDashboardslidesArgs): Promise<DashboardslidesGroupBy[]>;
}
