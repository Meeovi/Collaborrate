import { GraphQLResolveInfo } from "graphql";
import { UpdateOneRatingArgs } from "./args/UpdateOneRatingArgs";
import { Rating } from "../../../models/Rating";
export declare class UpdateOneRatingResolver {
    updateOneRating(ctx: any, info: GraphQLResolveInfo, args: UpdateOneRatingArgs): Promise<Rating | null>;
}
