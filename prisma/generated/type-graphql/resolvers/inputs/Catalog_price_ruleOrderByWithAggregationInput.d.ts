import { Catalog_price_ruleAvgOrderByAggregateInput } from "../inputs/Catalog_price_ruleAvgOrderByAggregateInput";
import { Catalog_price_ruleCountOrderByAggregateInput } from "../inputs/Catalog_price_ruleCountOrderByAggregateInput";
import { Catalog_price_ruleMaxOrderByAggregateInput } from "../inputs/Catalog_price_ruleMaxOrderByAggregateInput";
import { Catalog_price_ruleMinOrderByAggregateInput } from "../inputs/Catalog_price_ruleMinOrderByAggregateInput";
import { Catalog_price_ruleSumOrderByAggregateInput } from "../inputs/Catalog_price_ruleSumOrderByAggregateInput";
export declare class Catalog_price_ruleOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    rule?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    active?: "asc" | "desc" | undefined;
    customer_groups?: "asc" | "desc" | undefined;
    priority?: "asc" | "desc" | undefined;
    start_date?: "asc" | "desc" | undefined;
    end_date?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    website?: "asc" | "desc" | undefined;
    actions_apply?: "asc" | "desc" | undefined;
    actions_discount_amount?: "asc" | "desc" | undefined;
    actions_discard_subsequent_rules?: "asc" | "desc" | undefined;
    _count?: Catalog_price_ruleCountOrderByAggregateInput | undefined;
    _avg?: Catalog_price_ruleAvgOrderByAggregateInput | undefined;
    _max?: Catalog_price_ruleMaxOrderByAggregateInput | undefined;
    _min?: Catalog_price_ruleMinOrderByAggregateInput | undefined;
    _sum?: Catalog_price_ruleSumOrderByAggregateInput | undefined;
}
