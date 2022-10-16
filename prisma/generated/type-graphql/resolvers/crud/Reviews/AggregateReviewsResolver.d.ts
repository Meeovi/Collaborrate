import { GraphQLResolveInfo } from "graphql";
import { AggregateReviewsArgs } from "./args/AggregateReviewsArgs";
import { AggregateReviews } from "../../outputs/AggregateReviews";
export declare class AggregateReviewsResolver {
    aggregateReviews(ctx: any, info: GraphQLResolveInfo, args: AggregateReviewsArgs): Promise<AggregateReviews>;
}
