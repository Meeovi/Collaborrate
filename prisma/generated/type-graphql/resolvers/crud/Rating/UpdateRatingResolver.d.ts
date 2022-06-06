import { GraphQLResolveInfo } from "graphql";
import { UpdateRatingArgs } from "./args/UpdateRatingArgs";
import { Rating } from "../../../models/Rating";
export declare class UpdateRatingResolver {
    updateRating(ctx: any, info: GraphQLResolveInfo, args: UpdateRatingArgs): Promise<Rating | null>;
}
