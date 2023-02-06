import { GraphQLResolveInfo } from "graphql";
import { FindFirstReviewsArgs } from "./args/FindFirstReviewsArgs";
import { Reviews } from "../../../models/Reviews";
export declare class FindFirstReviewsResolver {
    findFirstReviews(ctx: any, info: GraphQLResolveInfo, args: FindFirstReviewsArgs): Promise<Reviews | null>;
}
