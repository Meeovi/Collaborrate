import { GraphQLResolveInfo } from "graphql";
import { CreateOneReviewsArgs } from "./args/CreateOneReviewsArgs";
import { Reviews } from "../../../models/Reviews";
export declare class CreateOneReviewsResolver {
    createOneReviews(ctx: any, info: GraphQLResolveInfo, args: CreateOneReviewsArgs): Promise<Reviews>;
}
