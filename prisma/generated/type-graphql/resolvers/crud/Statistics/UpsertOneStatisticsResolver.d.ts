import { GraphQLResolveInfo } from "graphql";
import { UpsertOneStatisticsArgs } from "./args/UpsertOneStatisticsArgs";
import { Statistics } from "../../../models/Statistics";
export declare class UpsertOneStatisticsResolver {
    upsertOneStatistics(ctx: any, info: GraphQLResolveInfo, args: UpsertOneStatisticsArgs): Promise<Statistics>;
}
