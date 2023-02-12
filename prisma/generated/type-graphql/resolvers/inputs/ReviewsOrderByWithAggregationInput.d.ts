import { ReviewsAvgOrderByAggregateInput } from "../inputs/ReviewsAvgOrderByAggregateInput";
import { ReviewsCountOrderByAggregateInput } from "../inputs/ReviewsCountOrderByAggregateInput";
import { ReviewsMaxOrderByAggregateInput } from "../inputs/ReviewsMaxOrderByAggregateInput";
import { ReviewsMinOrderByAggregateInput } from "../inputs/ReviewsMinOrderByAggregateInput";
import { ReviewsSumOrderByAggregateInput } from "../inputs/ReviewsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ReviewsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    first_name?: SortOrderInput | undefined;
    last_name?: SortOrderInput | undefined;
    content?: SortOrderInput | undefined;
    websites?: SortOrderInput | undefined;
    created_at?: SortOrderInput | undefined;
    _count?: ReviewsCountOrderByAggregateInput | undefined;
    _avg?: ReviewsAvgOrderByAggregateInput | undefined;
    _max?: ReviewsMaxOrderByAggregateInput | undefined;
    _min?: ReviewsMinOrderByAggregateInput | undefined;
    _sum?: ReviewsSumOrderByAggregateInput | undefined;
}
