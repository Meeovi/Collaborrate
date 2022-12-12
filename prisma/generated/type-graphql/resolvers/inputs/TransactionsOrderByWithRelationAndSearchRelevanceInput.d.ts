import { TransactionsOrderByRelevanceInput } from "../inputs/TransactionsOrderByRelevanceInput";
export declare class TransactionsOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    order_id?: "asc" | "desc" | undefined;
    transaction_id?: "asc" | "desc" | undefined;
    parent_transaction_id?: "asc" | "desc" | undefined;
    created?: "asc" | "desc" | undefined;
    payment_method?: "asc" | "desc" | undefined;
    closed?: "asc" | "desc" | undefined;
    customer_payment?: "asc" | "desc" | undefined;
    orders?: "asc" | "desc" | undefined;
    _relevance?: TransactionsOrderByRelevanceInput | undefined;
}
