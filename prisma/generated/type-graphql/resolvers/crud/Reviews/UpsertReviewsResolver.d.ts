import { GraphQLResolveInfo } from "graphql";
import { UpsertReviewsArgs } from "./args/UpsertReviewsArgs";
import { Reviews } from "../../../models/Reviews";
export declare class UpsertReviewsResolver {
    upsertReviews(ctx: any, info: GraphQLResolveInfo, args: UpsertReviewsArgs): Promise<Reviews>;
}
