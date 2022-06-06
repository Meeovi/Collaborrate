import { GraphQLResolveInfo } from "graphql";
import { CreateStatisticsArgs } from "./args/CreateStatisticsArgs";
import { Statistics } from "../../../models/Statistics";
export declare class CreateStatisticsResolver {
    createStatistics(ctx: any, info: GraphQLResolveInfo, args: CreateStatisticsArgs): Promise<Statistics>;
}
