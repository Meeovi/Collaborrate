import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class TransactionsScalarWhereWithAggregatesInput {
    AND?: TransactionsScalarWhereWithAggregatesInput[] | undefined;
    OR?: TransactionsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TransactionsScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    order_id?: IntWithAggregatesFilter | undefined;
    transaction_id?: IntWithAggregatesFilter | undefined;
    parent_transaction_id?: IntWithAggregatesFilter | undefined;
    created?: DateTimeNullableWithAggregatesFilter | undefined;
    payment_method?: BigIntWithAggregatesFilter | undefined;
    closed?: StringNullableWithAggregatesFilter | undefined;
    customer_payment?: StringNullableWithAggregatesFilter | undefined;
    orders?: StringNullableWithAggregatesFilter | undefined;
}
