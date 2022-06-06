import { GraphQLResolveInfo } from "graphql";
import { FindUniqueRatingArgs } from "./args/FindUniqueRatingArgs";
import { Rating } from "../../../models/Rating";
export declare class FindUniqueRatingResolver {
    rating(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRatingArgs): Promise<Rating | null>;
}
