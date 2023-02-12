import { TransactionsOrderByWithRelationInput } from "../../../inputs/TransactionsOrderByWithRelationInput";
import { TransactionsWhereInput } from "../../../inputs/TransactionsWhereInput";
import { TransactionsWhereUniqueInput } from "../../../inputs/TransactionsWhereUniqueInput";
export declare class FindFirstTransactionsArgs {
    where?: TransactionsWhereInput | undefined;
    orderBy?: TransactionsOrderByWithRelationInput[] | undefined;
    cursor?: TransactionsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "order_id" | "transaction_id" | "parent_transaction_id" | "created" | "payment_method" | "closed" | "customer_payment" | "orders"> | undefined;
}
