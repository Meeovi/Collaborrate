import { GraphQLResolveInfo } from "graphql";
import { GroupByAnalyticsArgs } from "./args/GroupByAnalyticsArgs";
import { AnalyticsGroupBy } from "../../outputs/AnalyticsGroupBy";
export declare class GroupByAnalyticsResolver {
    groupByAnalytics(ctx: any, info: GraphQLResolveInfo, args: GroupByAnalyticsArgs): Promise<AnalyticsGroupBy[]>;
}
