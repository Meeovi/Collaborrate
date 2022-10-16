import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DecimalNullableWithAggregatesFilter } from "../inputs/DecimalNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class Cart_price_rulesScalarWhereWithAggregatesInput {
    AND?: Cart_price_rulesScalarWhereWithAggregatesInput[] | undefined;
    OR?: Cart_price_rulesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Cart_price_rulesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    rule?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    active?: BoolNullableWithAggregatesFilter | undefined;
    coupon?: StringNullableWithAggregatesFilter | undefined;
    uses_per_customer?: StringNullableWithAggregatesFilter | undefined;
    priority?: StringNullableWithAggregatesFilter | undefined;
    start_date?: DateTimeNullableWithAggregatesFilter | undefined;
    end_date?: DateTimeNullableWithAggregatesFilter | undefined;
    status?: StringNullableWithAggregatesFilter | undefined;
    website?: StringNullableWithAggregatesFilter | undefined;
    actions_apply?: StringNullableWithAggregatesFilter | undefined;
    actions_discount_amount?: DecimalNullableWithAggregatesFilter | undefined;
    actions_discard_subsequent_rules?: BoolNullableWithAggregatesFilter | undefined;
    actions_max_qty_discount_is_applied_to?: DecimalNullableWithAggregatesFilter | undefined;
    actions_discount_qty_step?: DecimalNullableWithAggregatesFilter | undefined;
    actions_apply_shipping_amount?: BoolNullableWithAggregatesFilter | undefined;
}
