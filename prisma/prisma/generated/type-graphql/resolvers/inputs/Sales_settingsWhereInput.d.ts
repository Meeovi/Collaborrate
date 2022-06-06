import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Sales_settingsWhereInput {
    AND?: Sales_settingsWhereInput[] | undefined;
    OR?: Sales_settingsWhereInput[] | undefined;
    NOT?: Sales_settingsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    sales_email?: StringNullableFilter | undefined;
    hide_customer_ip?: StringNullableFilter | undefined;
    checkout_subtotal?: StringNullableFilter | undefined;
    checkout_discount?: StringNullableFilter | undefined;
    checkout_shipping?: StringNullableFilter | undefined;
    checkout_tax?: StringNullableFilter | undefined;
    checkout_fixed_product_tax?: StringNullableFilter | undefined;
    checkout_grand_total?: StringNullableFilter | undefined;
    checkout_gift_cards?: StringNullableFilter | undefined;
    checkout_store_credit?: StringNullableFilter | undefined;
    allow_reorder?: StringNullableFilter | undefined;
    allow_zero_grandtotal?: StringNullableFilter | undefined;
    invoice_logo?: StringNullableFilter | undefined;
    invoice_html_print?: StringNullableFilter | undefined;
    invoice_address?: StringNullableFilter | undefined;
}
