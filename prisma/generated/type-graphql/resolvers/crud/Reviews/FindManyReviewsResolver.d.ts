import { GraphQLResolveInfo } from "graphql";
import { FindManyReviewsArgs } from "./args/FindManyReviewsArgs";
import { Reviews } from "../../../models/Reviews";
export declare class FindManyReviewsResolver {
    findManyReviews(ctx: any, info: GraphQLResolveInfo, args: FindManyReviewsArgs): Promise<Reviews[]>;
}
