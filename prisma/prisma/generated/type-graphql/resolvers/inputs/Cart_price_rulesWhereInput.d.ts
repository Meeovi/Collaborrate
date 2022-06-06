import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../inputs/DecimalNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Cart_price_rulesWhereInput {
    AND?: Cart_price_rulesWhereInput[] | undefined;
    OR?: Cart_price_rulesWhereInput[] | undefined;
    NOT?: Cart_price_rulesWhereInput[] | undefined;
    id?: IntFilter | undefined;
    rule?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    active?: BoolNullableFilter | undefined;
    coupon?: StringNullableFilter | undefined;
    uses_per_customer?: StringNullableFilter | undefined;
    priority?: StringNullableFilter | undefined;
    start_date?: DateTimeNullableFilter | undefined;
    end_date?: DateTimeNullableFilter | undefined;
    status?: StringNullableFilter | undefined;
    website?: StringNullableFilter | undefined;
    actions_apply?: StringNullableFilter | undefined;
    actions_discount_amount?: DecimalNullableFilter | undefined;
    actions_discard_subsequent_rules?: BoolNullableFilter | undefined;
    actions_max_qty_discount_is_applied_to?: DecimalNullableFilter | undefined;
    actions_discount_qty_step?: DecimalNullableFilter | undefined;
    actions_apply_shipping_amount?: BoolNullableFilter | undefined;
}
