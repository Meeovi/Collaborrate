import { GraphQLResolveInfo } from "graphql";
import { DeleteOneReviewsArgs } from "./args/DeleteOneReviewsArgs";
import { Reviews } from "../../../models/Reviews";
export declare class DeleteOneReviewsResolver {
    deleteOneReviews(ctx: any, info: GraphQLResolveInfo, args: DeleteOneReviewsArgs): Promise<Reviews | null>;
}
