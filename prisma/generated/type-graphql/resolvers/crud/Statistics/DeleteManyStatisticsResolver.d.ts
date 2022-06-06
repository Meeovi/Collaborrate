import { GraphQLResolveInfo } from "graphql";
import { DeleteManyStatisticsArgs } from "./args/DeleteManyStatisticsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyStatisticsResolver {
    deleteManyStatistics(ctx: any, info: GraphQLResolveInfo, args: DeleteManyStatisticsArgs): Promise<AffectedRowsOutput>;
}
