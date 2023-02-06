import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class InvoicesWhereInput {
    AND?: InvoicesWhereInput[] | undefined;
    OR?: InvoicesWhereInput[] | undefined;
    NOT?: InvoicesWhereInput[] | undefined;
    invoice?: IntFilter | undefined;
    order_number?: BigIntFilter | undefined;
    invoice_date?: DateTimeNullableFilter | undefined;
    bill_to_name?: StringFilter | undefined;
    billing_address?: StringNullableFilter | undefined;
    grand_total_base?: StringNullableFilter | undefined;
    grand_total_purchased?: StringNullableFilter | undefined;
    status?: StringNullableFilter | undefined;
    shipping_address?: StringNullableFilter | undefined;
    customer_name?: StringNullableFilter | undefined;
    email?: StringNullableFilter | undefined;
    customer_group?: StringNullableFilter | undefined;
    payment_method?: StringNullableFilter | undefined;
    shipping_information?: StringNullableFilter | undefined;
    subtotal?: StringNullableFilter | undefined;
    shipping_and_handling?: StringNullableFilter | undefined;
    id?: BigIntFilter | undefined;
}
