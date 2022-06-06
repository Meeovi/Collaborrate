import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class TransactionsScalarWhereInput {
    AND?: TransactionsScalarWhereInput[] | undefined;
    OR?: TransactionsScalarWhereInput[] | undefined;
    NOT?: TransactionsScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    order_id?: IntFilter | undefined;
    transaction_id?: IntFilter | undefined;
    parent_transaction_id?: IntFilter | undefined;
    created?: DateTimeNullableFilter | undefined;
    payment_method?: BigIntFilter | undefined;
    closed?: StringNullableFilter | undefined;
}
