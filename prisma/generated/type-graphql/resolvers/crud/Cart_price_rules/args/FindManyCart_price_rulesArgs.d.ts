import { Cart_price_rulesOrderByWithRelationInput } from "../../../inputs/Cart_price_rulesOrderByWithRelationInput";
import { Cart_price_rulesWhereInput } from "../../../inputs/Cart_price_rulesWhereInput";
import { Cart_price_rulesWhereUniqueInput } from "../../../inputs/Cart_price_rulesWhereUniqueInput";
export declare class FindManyCart_price_rulesArgs {
    where?: Cart_price_rulesWhereInput | undefined;
    orderBy?: Cart_price_rulesOrderByWithRelationInput[] | undefined;
    cursor?: Cart_price_rulesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "rule" | "description" | "active" | "coupon" | "uses_per_customer" | "priority" | "start_date" | "end_date" | "status" | "website" | "actions_apply" | "actions_discount_amount" | "actions_discard_subsequent_rules" | "actions_max_qty_discount_is_applied_to" | "actions_discount_qty_step" | "actions_apply_shipping_amount"> | undefined;
}
