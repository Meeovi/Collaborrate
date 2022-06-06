import { GraphQLResolveInfo } from "graphql";
import { CreateRatingArgs } from "./args/CreateRatingArgs";
import { Rating } from "../../../models/Rating";
export declare class CreateRatingResolver {
    createRating(ctx: any, info: GraphQLResolveInfo, args: CreateRatingArgs): Promise<Rating>;
}
