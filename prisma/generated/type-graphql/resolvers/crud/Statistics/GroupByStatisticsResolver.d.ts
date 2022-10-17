import { GraphQLResolveInfo } from "graphql";
import { GroupByStatisticsArgs } from "./args/GroupByStatisticsArgs";
import { StatisticsGroupBy } from "../../outputs/StatisticsGroupBy";
export declare class GroupByStatisticsResolver {
    groupByStatistics(ctx: any, info: GraphQLResolveInfo, args: GroupByStatisticsArgs): Promise<StatisticsGroupBy[]>;
}
