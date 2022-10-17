import { Tax_rateAvgOrderByAggregateInput } from "../inputs/Tax_rateAvgOrderByAggregateInput";
import { Tax_rateCountOrderByAggregateInput } from "../inputs/Tax_rateCountOrderByAggregateInput";
import { Tax_rateMaxOrderByAggregateInput } from "../inputs/Tax_rateMaxOrderByAggregateInput";
import { Tax_rateMinOrderByAggregateInput } from "../inputs/Tax_rateMinOrderByAggregateInput";
import { Tax_rateSumOrderByAggregateInput } from "../inputs/Tax_rateSumOrderByAggregateInput";
export declare class Tax_rateOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    tax_identifier?: "asc" | "desc" | undefined;
    zip_post_is_range?: "asc" | "desc" | undefined;
    postcode?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    rate_percent?: "asc" | "desc" | undefined;
    default_store_view?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    _count?: Tax_rateCountOrderByAggregateInput | undefined;
    _avg?: Tax_rateAvgOrderByAggregateInput | undefined;
    _max?: Tax_rateMaxOrderByAggregateInput | undefined;
    _min?: Tax_rateMinOrderByAggregateInput | undefined;
    _sum?: Tax_rateSumOrderByAggregateInput | undefined;
}
