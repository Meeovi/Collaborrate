import { GraphQLResolveInfo } from "graphql";
import { AggregateRatingArgs } from "./args/AggregateRatingArgs";
import { AggregateRating } from "../../outputs/AggregateRating";
export declare class AggregateRatingResolver {
    aggregateRating(ctx: any, info: GraphQLResolveInfo, args: AggregateRatingArgs): Promise<AggregateRating>;
}
