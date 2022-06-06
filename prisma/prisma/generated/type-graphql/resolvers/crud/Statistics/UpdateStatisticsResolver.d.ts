import { GraphQLResolveInfo } from "graphql";
import { UpdateStatisticsArgs } from "./args/UpdateStatisticsArgs";
import { Statistics } from "../../../models/Statistics";
export declare class UpdateStatisticsResolver {
    updateStatistics(ctx: any, info: GraphQLResolveInfo, args: UpdateStatisticsArgs): Promise<Statistics | null>;
}
