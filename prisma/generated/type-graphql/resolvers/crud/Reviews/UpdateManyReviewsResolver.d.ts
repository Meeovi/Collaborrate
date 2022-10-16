import { GraphQLResolveInfo } from "graphql";
import { UpdateManyReviewsArgs } from "./args/UpdateManyReviewsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyReviewsResolver {
    updateManyReviews(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReviewsArgs): Promise<AffectedRowsOutput>;
}
