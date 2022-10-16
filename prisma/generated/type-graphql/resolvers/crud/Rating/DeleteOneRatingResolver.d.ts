import { GraphQLResolveInfo } from "graphql";
import { DeleteOneRatingArgs } from "./args/DeleteOneRatingArgs";
import { Rating } from "../../../models/Rating";
export declare class DeleteOneRatingResolver {
    deleteOneRating(ctx: any, info: GraphQLResolveInfo, args: DeleteOneRatingArgs): Promise<Rating | null>;
}
