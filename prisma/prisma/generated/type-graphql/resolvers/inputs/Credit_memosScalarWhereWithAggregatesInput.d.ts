import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class Credit_memosScalarWhereWithAggregatesInput {
    AND?: Credit_memosScalarWhereWithAggregatesInput[] | undefined;
    OR?: Credit_memosScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Credit_memosScalarWhereWithAggregatesInput[] | undefined;
    credit_memo?: StringWithAggregatesFilter | undefined;
    order_number?: IntWithAggregatesFilter | undefined;
    created?: DateTimeNullableWithAggregatesFilter | undefined;
    bill_to_name?: StringWithAggregatesFilter | undefined;
    status?: StringNullableWithAggregatesFilter | undefined;
    refunded?: StringNullableWithAggregatesFilter | undefined;
    action?: StringNullableWithAggregatesFilter | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    cust_id?: IntWithAggregatesFilter | undefined;
    prod_id?: BigIntWithAggregatesFilter | undefined;
}
