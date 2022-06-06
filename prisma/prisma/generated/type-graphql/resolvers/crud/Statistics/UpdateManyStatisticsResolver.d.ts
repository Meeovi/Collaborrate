import { GraphQLResolveInfo } from "graphql";
import { UpdateManyStatisticsArgs } from "./args/UpdateManyStatisticsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyStatisticsResolver {
    updateManyStatistics(ctx: any, info: GraphQLResolveInfo, args: UpdateManyStatisticsArgs): Promise<AffectedRowsOutput>;
}
