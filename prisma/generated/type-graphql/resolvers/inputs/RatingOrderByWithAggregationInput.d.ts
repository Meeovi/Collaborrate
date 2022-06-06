import { RatingAvgOrderByAggregateInput } from "../inputs/RatingAvgOrderByAggregateInput";
import { RatingCountOrderByAggregateInput } from "../inputs/RatingCountOrderByAggregateInput";
import { RatingMaxOrderByAggregateInput } from "../inputs/RatingMaxOrderByAggregateInput";
import { RatingMinOrderByAggregateInput } from "../inputs/RatingMinOrderByAggregateInput";
import { RatingSumOrderByAggregateInput } from "../inputs/RatingSumOrderByAggregateInput";
export declare class RatingOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    default_value?: "asc" | "desc" | undefined;
    default_store_view?: "asc" | "desc" | undefined;
    rating_visibility?: "asc" | "desc" | undefined;
    active?: "asc" | "desc" | undefined;
    sort_order?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    _count?: RatingCountOrderByAggregateInput | undefined;
    _avg?: RatingAvgOrderByAggregateInput | undefined;
    _max?: RatingMaxOrderByAggregateInput | undefined;
    _min?: RatingMinOrderByAggregateInput | undefined;
    _sum?: RatingSumOrderByAggregateInput | undefined;
}
