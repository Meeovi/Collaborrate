import { ReturnsAvgOrderByAggregateInput } from "../inputs/ReturnsAvgOrderByAggregateInput";
import { ReturnsCountOrderByAggregateInput } from "../inputs/ReturnsCountOrderByAggregateInput";
import { ReturnsMaxOrderByAggregateInput } from "../inputs/ReturnsMaxOrderByAggregateInput";
import { ReturnsMinOrderByAggregateInput } from "../inputs/ReturnsMinOrderByAggregateInput";
import { ReturnsSumOrderByAggregateInput } from "../inputs/ReturnsSumOrderByAggregateInput";
export declare class ReturnsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    validity?: "asc" | "desc" | undefined;
    return_prefix?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    _count?: ReturnsCountOrderByAggregateInput | undefined;
    _avg?: ReturnsAvgOrderByAggregateInput | undefined;
    _max?: ReturnsMaxOrderByAggregateInput | undefined;
    _min?: ReturnsMinOrderByAggregateInput | undefined;
    _sum?: ReturnsSumOrderByAggregateInput | undefined;
}
