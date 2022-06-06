import { GraphQLResolveInfo } from "graphql";
import { FindFirstRatingArgs } from "./args/FindFirstRatingArgs";
import { Rating } from "../../../models/Rating";
export declare class FindFirstRatingResolver {
    findFirstRating(ctx: any, info: GraphQLResolveInfo, args: FindFirstRatingArgs): Promise<Rating | null>;
}
