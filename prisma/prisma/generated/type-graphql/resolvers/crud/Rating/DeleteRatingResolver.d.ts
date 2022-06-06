import { GraphQLResolveInfo } from "graphql";
import { DeleteRatingArgs } from "./args/DeleteRatingArgs";
import { Rating } from "../../../models/Rating";
export declare class DeleteRatingResolver {
    deleteRating(ctx: any, info: GraphQLResolveInfo, args: DeleteRatingArgs): Promise<Rating | null>;
}
