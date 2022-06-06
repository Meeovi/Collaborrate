import { GraphQLResolveInfo } from "graphql";
import { UpsertStatisticsArgs } from "./args/UpsertStatisticsArgs";
import { Statistics } from "../../../models/Statistics";
export declare class UpsertStatisticsResolver {
    upsertStatistics(ctx: any, info: GraphQLResolveInfo, args: UpsertStatisticsArgs): Promise<Statistics>;
}
