import { BigIntFilter } from "../inputs/BigIntFilter";
import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter";
import { CustomersRelationFilter } from "../inputs/CustomersRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TransactionsListRelationFilter } from "../inputs/TransactionsListRelationFilter";
export declare class Customer_paymentWhereInput {
    AND?: Customer_paymentWhereInput[] | undefined;
    OR?: Customer_paymentWhereInput[] | undefined;
    NOT?: Customer_paymentWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    cust_id?: IntFilter | undefined;
    payment_info?: StringNullableFilter | undefined;
    provider?: StringNullableFilter | undefined;
    account_no?: BigIntFilter | undefined;
    expiry?: BigIntNullableFilter | undefined;
    customers?: CustomersRelationFilter | undefined;
    transactions?: TransactionsListRelationFilter | undefined;
}
