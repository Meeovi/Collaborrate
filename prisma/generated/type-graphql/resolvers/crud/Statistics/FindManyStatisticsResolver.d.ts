import { GraphQLResolveInfo } from "graphql";
import { FindManyStatisticsArgs } from "./args/FindManyStatisticsArgs";
import { Statistics } from "../../../models/Statistics";
export declare class FindManyStatisticsResolver {
    findManyStatistics(ctx: any, info: GraphQLResolveInfo, args: FindManyStatisticsArgs): Promise<Statistics[]>;
}
