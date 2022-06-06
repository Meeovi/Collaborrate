import { GraphQLResolveInfo } from "graphql";
import { FindManyRatingArgs } from "./args/FindManyRatingArgs";
import { Rating } from "../../../models/Rating";
export declare class FindManyRatingResolver {
    ratings(ctx: any, info: GraphQLResolveInfo, args: FindManyRatingArgs): Promise<Rating[]>;
}
