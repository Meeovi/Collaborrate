import { GraphQLResolveInfo } from "graphql";
import { CreateManyStatisticsArgs } from "./args/CreateManyStatisticsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyStatisticsResolver {
    createManyStatistics(ctx: any, info: GraphQLResolveInfo, args: CreateManyStatisticsArgs): Promise<AffectedRowsOutput>;
}
