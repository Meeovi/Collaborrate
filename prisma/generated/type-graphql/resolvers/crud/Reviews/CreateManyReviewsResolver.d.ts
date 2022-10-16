import { GraphQLResolveInfo } from "graphql";
import { CreateManyReviewsArgs } from "./args/CreateManyReviewsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyReviewsResolver {
    createManyReviews(ctx: any, info: GraphQLResolveInfo, args: CreateManyReviewsArgs): Promise<AffectedRowsOutput>;
}
