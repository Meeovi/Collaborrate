import { Cart_price_rulesAvgOrderByAggregateInput } from "../inputs/Cart_price_rulesAvgOrderByAggregateInput";
import { Cart_price_rulesCountOrderByAggregateInput } from "../inputs/Cart_price_rulesCountOrderByAggregateInput";
import { Cart_price_rulesMaxOrderByAggregateInput } from "../inputs/Cart_price_rulesMaxOrderByAggregateInput";
import { Cart_price_rulesMinOrderByAggregateInput } from "../inputs/Cart_price_rulesMinOrderByAggregateInput";
import { Cart_price_rulesSumOrderByAggregateInput } from "../inputs/Cart_price_rulesSumOrderByAggregateInput";
export declare class Cart_price_rulesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    rule?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    active?: "asc" | "desc" | undefined;
    coupon?: "asc" | "desc" | undefined;
    uses_per_customer?: "asc" | "desc" | undefined;
    priority?: "asc" | "desc" | undefined;
    start_date?: "asc" | "desc" | undefined;
    end_date?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    website?: "asc" | "desc" | undefined;
    actions_apply?: "asc" | "desc" | undefined;
    actions_discount_amount?: "asc" | "desc" | undefined;
    actions_discard_subsequent_rules?: "asc" | "desc" | undefined;
    actions_max_qty_discount_is_applied_to?: "asc" | "desc" | undefined;
    actions_discount_qty_step?: "asc" | "desc" | undefined;
    actions_apply_shipping_amount?: "asc" | "desc" | undefined;
    _count?: Cart_price_rulesCountOrderByAggregateInput | undefined;
    _avg?: Cart_price_rulesAvgOrderByAggregateInput | undefined;
    _max?: Cart_price_rulesMaxOrderByAggregateInput | undefined;
    _min?: Cart_price_rulesMinOrderByAggregateInput | undefined;
    _sum?: Cart_price_rulesSumOrderByAggregateInput | undefined;
}
