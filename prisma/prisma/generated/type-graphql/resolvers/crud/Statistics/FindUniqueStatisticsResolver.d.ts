import { GraphQLResolveInfo } from "graphql";
import { FindUniqueStatisticsArgs } from "./args/FindUniqueStatisticsArgs";
import { Statistics } from "../../../models/Statistics";
export declare class FindUniqueStatisticsResolver {
    findUniqueStatistics(ctx: any, info: GraphQLResolveInfo, args: FindUniqueStatisticsArgs): Promise<Statistics | null>;
}
