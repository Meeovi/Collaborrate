import { GraphQLResolveInfo } from "graphql";
import { UpsertOneRatingArgs } from "./args/UpsertOneRatingArgs";
import { Rating } from "../../../models/Rating";
export declare class UpsertOneRatingResolver {
    upsertOneRating(ctx: any, info: GraphQLResolveInfo, args: UpsertOneRatingArgs): Promise<Rating>;
}
