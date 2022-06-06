import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class InvoicesScalarWhereWithAggregatesInput {
    AND?: InvoicesScalarWhereWithAggregatesInput[] | undefined;
    OR?: InvoicesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: InvoicesScalarWhereWithAggregatesInput[] | undefined;
    invoice?: IntWithAggregatesFilter | undefined;
    order_number?: BigIntWithAggregatesFilter | undefined;
    invoice_date?: DateTimeNullableWithAggregatesFilter | undefined;
    bill_to_name?: StringWithAggregatesFilter | undefined;
    billing_address?: StringNullableWithAggregatesFilter | undefined;
    grand_total_base?: StringNullableWithAggregatesFilter | undefined;
    grand_total_purchased?: StringNullableWithAggregatesFilter | undefined;
    status?: StringNullableWithAggregatesFilter | undefined;
    shipping_address?: StringNullableWithAggregatesFilter | undefined;
    customer_name?: StringNullableWithAggregatesFilter | undefined;
    email?: StringNullableWithAggregatesFilter | undefined;
    customer_group?: StringNullableWithAggregatesFilter | undefined;
    payment_method?: StringNullableWithAggregatesFilter | undefined;
    shipping_information?: StringNullableWithAggregatesFilter | undefined;
    subtotal?: StringNullableWithAggregatesFilter | undefined;
    shipping_and_handling?: StringNullableWithAggregatesFilter | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
}
