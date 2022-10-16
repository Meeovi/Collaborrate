import { GraphQLResolveInfo } from "graphql";
import { AggregateAnalyticsArgs } from "./args/AggregateAnalyticsArgs";
import { AggregateAnalytics } from "../../outputs/AggregateAnalytics";
export declare class AggregateAnalyticsResolver {
    aggregateAnalytics(ctx: any, info: GraphQLResolveInfo, args: AggregateAnalyticsArgs): Promise<AggregateAnalytics>;
}
