import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class Sales_settingsScalarWhereWithAggregatesInput {
    AND?: Sales_settingsScalarWhereWithAggregatesInput[] | undefined;
    OR?: Sales_settingsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Sales_settingsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    sales_email?: StringNullableWithAggregatesFilter | undefined;
    hide_customer_ip?: StringNullableWithAggregatesFilter | undefined;
    checkout_subtotal?: StringNullableWithAggregatesFilter | undefined;
    checkout_discount?: StringNullableWithAggregatesFilter | undefined;
    checkout_shipping?: StringNullableWithAggregatesFilter | undefined;
    checkout_tax?: StringNullableWithAggregatesFilter | undefined;
    checkout_fixed_product_tax?: StringNullableWithAggregatesFilter | undefined;
    checkout_grand_total?: StringNullableWithAggregatesFilter | undefined;
    checkout_gift_cards?: StringNullableWithAggregatesFilter | undefined;
    checkout_store_credit?: StringNullableWithAggregatesFilter | undefined;
    allow_reorder?: StringNullableWithAggregatesFilter | undefined;
    allow_zero_grandtotal?: StringNullableWithAggregatesFilter | undefined;
    invoice_logo?: StringNullableWithAggregatesFilter | undefined;
    invoice_html_print?: StringNullableWithAggregatesFilter | undefined;
    invoice_address?: StringNullableWithAggregatesFilter | undefined;
}
