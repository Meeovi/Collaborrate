import { Cart_price_rulesOrderByWithAggregationInput } from "../../../inputs/Cart_price_rulesOrderByWithAggregationInput";
import { Cart_price_rulesScalarWhereWithAggregatesInput } from "../../../inputs/Cart_price_rulesScalarWhereWithAggregatesInput";
import { Cart_price_rulesWhereInput } from "../../../inputs/Cart_price_rulesWhereInput";
export declare class GroupByCart_price_rulesArgs {
    where?: Cart_price_rulesWhereInput | undefined;
    orderBy?: Cart_price_rulesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "rule" | "description" | "active" | "coupon" | "uses_per_customer" | "priority" | "start_date" | "end_date" | "status" | "website" | "actions_apply" | "actions_discount_amount" | "actions_discard_subsequent_rules" | "actions_max_qty_discount_is_applied_to" | "actions_discount_qty_step" | "actions_apply_shipping_amount">;
    having?: Cart_price_rulesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
