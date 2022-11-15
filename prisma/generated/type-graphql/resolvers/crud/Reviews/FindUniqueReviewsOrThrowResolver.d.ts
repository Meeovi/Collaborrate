import { GraphQLResolveInfo } from "graphql";
import { FindUniqueReviewsOrThrowArgs } from "./args/FindUniqueReviewsOrThrowArgs";
import { Reviews } from "../../../models/Reviews";
export declare class FindUniqueReviewsOrThrowResolver {
    findUniqueReviewsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReviewsOrThrowArgs): Promise<Reviews | null>;
}
