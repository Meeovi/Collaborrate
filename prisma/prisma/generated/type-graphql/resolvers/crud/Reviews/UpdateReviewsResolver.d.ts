import { GraphQLResolveInfo } from "graphql";
import { UpdateReviewsArgs } from "./args/UpdateReviewsArgs";
import { Reviews } from "../../../models/Reviews";
export declare class UpdateReviewsResolver {
    updateReviews(ctx: any, info: GraphQLResolveInfo, args: UpdateReviewsArgs): Promise<Reviews | null>;
}
