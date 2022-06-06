import { GraphQLResolveInfo } from "graphql";
import { UpsertRatingArgs } from "./args/UpsertRatingArgs";
import { Rating } from "../../../models/Rating";
export declare class UpsertRatingResolver {
    upsertRating(ctx: any, info: GraphQLResolveInfo, args: UpsertRatingArgs): Promise<Rating>;
}
