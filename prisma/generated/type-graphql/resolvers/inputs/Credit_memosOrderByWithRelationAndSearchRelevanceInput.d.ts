import { Credit_memosOrderByRelevanceInput } from "../inputs/Credit_memosOrderByRelevanceInput";
export declare class Credit_memosOrderByWithRelationAndSearchRelevanceInput {
    credit_memo?: "asc" | "desc" | undefined;
    order_number?: "asc" | "desc" | undefined;
    created?: "asc" | "desc" | undefined;
    bill_to_name?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    refunded?: "asc" | "desc" | undefined;
    action?: "asc" | "desc" | undefined;
    id?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    _relevance?: Credit_memosOrderByRelevanceInput | undefined;
}
