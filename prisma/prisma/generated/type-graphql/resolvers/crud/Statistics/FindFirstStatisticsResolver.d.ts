import { GraphQLResolveInfo } from "graphql";
import { FindFirstStatisticsArgs } from "./args/FindFirstStatisticsArgs";
import { Statistics } from "../../../models/Statistics";
export declare class FindFirstStatisticsResolver {
    findFirstStatistics(ctx: any, info: GraphQLResolveInfo, args: FindFirstStatisticsArgs): Promise<Statistics | null>;
}
