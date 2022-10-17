import { GraphQLResolveInfo } from "graphql";
import { CreateManyAnalyticsArgs } from "./args/CreateManyAnalyticsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAnalyticsResolver {
    createManyAnalytics(ctx: any, info: GraphQLResolveInfo, args: CreateManyAnalyticsArgs): Promise<AffectedRowsOutput>;
}
