import { GraphQLResolveInfo } from "graphql";
import { UpsertOneReviewsArgs } from "./args/UpsertOneReviewsArgs";
import { Reviews } from "../../../models/Reviews";
export declare class UpsertOneReviewsResolver {
    upsertOneReviews(ctx: any, info: GraphQLResolveInfo, args: UpsertOneReviewsArgs): Promise<Reviews>;
}
