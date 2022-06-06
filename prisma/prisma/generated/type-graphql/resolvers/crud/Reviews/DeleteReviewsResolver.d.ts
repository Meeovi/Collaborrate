import { GraphQLResolveInfo } from "graphql";
import { DeleteReviewsArgs } from "./args/DeleteReviewsArgs";
import { Reviews } from "../../../models/Reviews";
export declare class DeleteReviewsResolver {
    deleteReviews(ctx: any, info: GraphQLResolveInfo, args: DeleteReviewsArgs): Promise<Reviews | null>;
}
