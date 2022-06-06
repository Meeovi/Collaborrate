import { GraphQLResolveInfo } from "graphql";
import { AggregateStatisticsArgs } from "./args/AggregateStatisticsArgs";
import { AggregateStatistics } from "../../outputs/AggregateStatistics";
export declare class AggregateStatisticsResolver {
    aggregateStatistics(ctx: any, info: GraphQLResolveInfo, args: AggregateStatisticsArgs): Promise<AggregateStatistics>;
}
