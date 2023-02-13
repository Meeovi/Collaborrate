import { ReviewsAvgOrderByAggregateInput } from "../inputs/ReviewsAvgOrderByAggregateInput";
import { ReviewsCountOrderByAggregateInput } from "../inputs/ReviewsCountOrderByAggregateInput";
import { ReviewsMaxOrderByAggregateInput } from "../inputs/ReviewsMaxOrderByAggregateInput";
import { ReviewsMinOrderByAggregateInput } from "../inputs/ReviewsMinOrderByAggregateInput";
import { ReviewsSumOrderByAggregateInput } from "../inputs/ReviewsSumOrderByAggregateInput";
export declare class ReviewsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    first_name?: "asc" | "desc" | undefined;
    last_name?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    websites?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    _count?: ReviewsCountOrderByAggregateInput | undefined;
    _avg?: ReviewsAvgOrderByAggregateInput | undefined;
    _max?: ReviewsMaxOrderByAggregateInput | undefined;
    _min?: ReviewsMinOrderByAggregateInput | undefined;
    _sum?: ReviewsSumOrderByAggregateInput | undefined;
}
