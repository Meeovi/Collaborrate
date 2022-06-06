import { GraphQLResolveInfo } from "graphql";
import { DeleteStatisticsArgs } from "./args/DeleteStatisticsArgs";
import { Statistics } from "../../../models/Statistics";
export declare class DeleteStatisticsResolver {
    deleteStatistics(ctx: any, info: GraphQLResolveInfo, args: DeleteStatisticsArgs): Promise<Statistics | null>;
}
