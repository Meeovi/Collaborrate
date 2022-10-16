import { GraphQLResolveInfo } from "graphql";
import { DeleteManyAnalyticsArgs } from "./args/DeleteManyAnalyticsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAnalyticsResolver {
    deleteManyAnalytics(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAnalyticsArgs): Promise<AffectedRowsOutput>;
}
