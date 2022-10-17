import { GraphQLResolveInfo } from "graphql";
import { UpdateManyAnalyticsArgs } from "./args/UpdateManyAnalyticsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAnalyticsResolver {
    updateManyAnalytics(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAnalyticsArgs): Promise<AffectedRowsOutput>;
}
