import { GraphQLResolveInfo } from "graphql";
import { DeleteOneStatisticsArgs } from "./args/DeleteOneStatisticsArgs";
import { Statistics } from "../../../models/Statistics";
export declare class DeleteOneStatisticsResolver {
    deleteOneStatistics(ctx: any, info: GraphQLResolveInfo, args: DeleteOneStatisticsArgs): Promise<Statistics | null>;
}
