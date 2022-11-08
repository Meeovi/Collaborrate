import { ReviewsOrderByWithAggregationInput } from "../../../inputs/ReviewsOrderByWithAggregationInput";
import { ReviewsScalarWhereWithAggregatesInput } from "../../../inputs/ReviewsScalarWhereWithAggregatesInput";
import { ReviewsWhereInput } from "../../../inputs/ReviewsWhereInput";
export declare class GroupByReviewsArgs {
    where?: ReviewsWhereInput | undefined;
    orderBy?: ReviewsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "first_name" | "last_name" | "content" | "websites" | "created_at" | "shop_id" | "comment_id">;
    having?: ReviewsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
