import { Tax_categoryAvgOrderByAggregateInput } from "../inputs/Tax_categoryAvgOrderByAggregateInput";
import { Tax_categoryCountOrderByAggregateInput } from "../inputs/Tax_categoryCountOrderByAggregateInput";
import { Tax_categoryMaxOrderByAggregateInput } from "../inputs/Tax_categoryMaxOrderByAggregateInput";
import { Tax_categoryMinOrderByAggregateInput } from "../inputs/Tax_categoryMinOrderByAggregateInput";
import { Tax_categorySumOrderByAggregateInput } from "../inputs/Tax_categorySumOrderByAggregateInput";
export declare class Tax_categoryOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    default?: "asc" | "desc" | undefined;
    _count?: Tax_categoryCountOrderByAggregateInput | undefined;
    _avg?: Tax_categoryAvgOrderByAggregateInput | undefined;
    _max?: Tax_categoryMaxOrderByAggregateInput | undefined;
    _min?: Tax_categoryMinOrderByAggregateInput | undefined;
    _sum?: Tax_categorySumOrderByAggregateInput | undefined;
}
