import { GraphQLResolveInfo } from "graphql";
import { CreateOneRatingArgs } from "./args/CreateOneRatingArgs";
import { Rating } from "../../../models/Rating";
export declare class CreateOneRatingResolver {
    createOneRating(ctx: any, info: GraphQLResolveInfo, args: CreateOneRatingArgs): Promise<Rating>;
}
