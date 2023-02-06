import { TransactionsOrderByWithAggregationInput } from "../../../inputs/TransactionsOrderByWithAggregationInput";
import { TransactionsScalarWhereWithAggregatesInput } from "../../../inputs/TransactionsScalarWhereWithAggregatesInput";
import { TransactionsWhereInput } from "../../../inputs/TransactionsWhereInput";
export declare class GroupByTransactionsArgs {
    where?: TransactionsWhereInput | undefined;
    orderBy?: TransactionsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "order_id" | "transaction_id" | "parent_transaction_id" | "created" | "payment_method" | "closed" | "customer_payment" | "orders">;
    having?: TransactionsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
