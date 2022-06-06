import { BigIntNullableWithAggregatesFilter } from "../inputs/BigIntNullableWithAggregatesFilter";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class Customer_paymentScalarWhereWithAggregatesInput {
    AND?: Customer_paymentScalarWhereWithAggregatesInput[] | undefined;
    OR?: Customer_paymentScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Customer_paymentScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    cust_id?: IntWithAggregatesFilter | undefined;
    payment_info?: StringNullableWithAggregatesFilter | undefined;
    provider?: StringNullableWithAggregatesFilter | undefined;
    account_no?: BigIntWithAggregatesFilter | undefined;
    expiry?: BigIntNullableWithAggregatesFilter | undefined;
}
