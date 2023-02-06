import { GraphQLResolveInfo } from "graphql";
import { FindFirstReviewsOrThrowArgs } from "./args/FindFirstReviewsOrThrowArgs";
import { Reviews } from "../../../models/Reviews";
export declare class FindFirstReviewsOrThrowResolver {
    findFirstReviewsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstReviewsOrThrowArgs): Promise<Reviews | null>;
}
