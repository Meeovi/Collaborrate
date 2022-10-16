import { GraphQLResolveInfo } from "graphql";
import { UpdateOneStatisticsArgs } from "./args/UpdateOneStatisticsArgs";
import { Statistics } from "../../../models/Statistics";
export declare class UpdateOneStatisticsResolver {
    updateOneStatistics(ctx: any, info: GraphQLResolveInfo, args: UpdateOneStatisticsArgs): Promise<Statistics | null>;
}
