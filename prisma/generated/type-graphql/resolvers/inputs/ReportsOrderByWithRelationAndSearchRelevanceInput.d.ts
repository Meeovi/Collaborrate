import { ReportsOrderByRelevanceInput } from "../inputs/ReportsOrderByRelevanceInput";
export declare class ReportsOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    customer?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    quantity?: "asc" | "desc" | undefined;
    subtotal?: "asc" | "desc" | undefined;
    applied_coupon?: "asc" | "desc" | undefined;
    created?: "asc" | "desc" | undefined;
    updated?: "asc" | "desc" | undefined;
    ip_address?: "asc" | "desc" | undefined;
    _relevance?: ReportsOrderByRelevanceInput | undefined;
}
