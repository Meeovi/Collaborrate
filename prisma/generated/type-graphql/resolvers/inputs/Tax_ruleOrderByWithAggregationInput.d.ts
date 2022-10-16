import { Tax_ruleAvgOrderByAggregateInput } from "../inputs/Tax_ruleAvgOrderByAggregateInput";
import { Tax_ruleCountOrderByAggregateInput } from "../inputs/Tax_ruleCountOrderByAggregateInput";
import { Tax_ruleMaxOrderByAggregateInput } from "../inputs/Tax_ruleMaxOrderByAggregateInput";
import { Tax_ruleMinOrderByAggregateInput } from "../inputs/Tax_ruleMinOrderByAggregateInput";
import { Tax_ruleSumOrderByAggregateInput } from "../inputs/Tax_ruleSumOrderByAggregateInput";
export declare class Tax_ruleOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    tax_rate?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    _count?: Tax_ruleCountOrderByAggregateInput | undefined;
    _avg?: Tax_ruleAvgOrderByAggregateInput | undefined;
    _max?: Tax_ruleMaxOrderByAggregateInput | undefined;
    _min?: Tax_ruleMinOrderByAggregateInput | undefined;
    _sum?: Tax_ruleSumOrderByAggregateInput | undefined;
}
