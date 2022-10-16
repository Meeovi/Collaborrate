import { Customer_groupOrderByRelevanceInput } from "../inputs/Customer_groupOrderByRelevanceInput";
export declare class Customer_groupOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    tax_class?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    coverPhoto?: "asc" | "desc" | undefined;
    _relevance?: Customer_groupOrderByRelevanceInput | undefined;
}
