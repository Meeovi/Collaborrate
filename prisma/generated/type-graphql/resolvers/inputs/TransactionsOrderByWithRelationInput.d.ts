import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class TransactionsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    order_id?: "asc" | "desc" | undefined;
    transaction_id?: "asc" | "desc" | undefined;
    parent_transaction_id?: "asc" | "desc" | undefined;
    created?: SortOrderInput | undefined;
    payment_method?: "asc" | "desc" | undefined;
    closed?: SortOrderInput | undefined;
    customer_payment?: SortOrderInput | undefined;
    orders?: SortOrderInput | undefined;
}
