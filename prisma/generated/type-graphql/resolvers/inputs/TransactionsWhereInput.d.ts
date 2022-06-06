import { BigIntFilter } from "../inputs/BigIntFilter";
import { Customer_paymentRelationFilter } from "../inputs/Customer_paymentRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OrdersRelationFilter } from "../inputs/OrdersRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class TransactionsWhereInput {
    AND?: TransactionsWhereInput[] | undefined;
    OR?: TransactionsWhereInput[] | undefined;
    NOT?: TransactionsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    order_id?: IntFilter | undefined;
    transaction_id?: IntFilter | undefined;
    parent_transaction_id?: IntFilter | undefined;
    created?: DateTimeNullableFilter | undefined;
    payment_method?: BigIntFilter | undefined;
    closed?: StringNullableFilter | undefined;
    orders?: OrdersRelationFilter | undefined;
    customer_payment?: Customer_paymentRelationFilter | undefined;
}
