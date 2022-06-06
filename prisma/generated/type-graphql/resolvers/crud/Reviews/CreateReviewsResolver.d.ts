import { GraphQLResolveInfo } from "graphql";
import { CreateReviewsArgs } from "./args/CreateReviewsArgs";
import { Reviews } from "../../../models/Reviews";
export declare class CreateReviewsResolver {
    createReviews(ctx: any, info: GraphQLResolveInfo, args: CreateReviewsArgs): Promise<Reviews>;
}
