import { GraphQLResolveInfo } from "graphql";
import { GroupByReviewsArgs } from "./args/GroupByReviewsArgs";
import { ReviewsGroupBy } from "../../outputs/ReviewsGroupBy";
export declare class GroupByReviewsResolver {
    groupByReviews(ctx: any, info: GraphQLResolveInfo, args: GroupByReviewsArgs): Promise<ReviewsGroupBy[]>;
}
