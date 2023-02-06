import { GraphQLResolveInfo } from "graphql";
import { DeleteManyReviewsArgs } from "./args/DeleteManyReviewsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyReviewsResolver {
    deleteManyReviews(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReviewsArgs): Promise<AffectedRowsOutput>;
}
