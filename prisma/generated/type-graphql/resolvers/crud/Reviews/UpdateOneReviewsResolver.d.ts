import { GraphQLResolveInfo } from "graphql";
import { UpdateOneReviewsArgs } from "./args/UpdateOneReviewsArgs";
import { Reviews } from "../../../models/Reviews";
export declare class UpdateOneReviewsResolver {
    updateOneReviews(ctx: any, info: GraphQLResolveInfo, args: UpdateOneReviewsArgs): Promise<Reviews | null>;
}
