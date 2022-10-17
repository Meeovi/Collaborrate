import { GraphQLResolveInfo } from "graphql";
import { FindUniqueReviewsArgs } from "./args/FindUniqueReviewsArgs";
import { Reviews } from "../../../models/Reviews";
export declare class FindUniqueReviewsResolver {
    findUniqueReviews(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReviewsArgs): Promise<Reviews | null>;
}
