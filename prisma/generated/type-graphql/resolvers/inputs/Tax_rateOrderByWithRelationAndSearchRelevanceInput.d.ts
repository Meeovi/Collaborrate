import { Tax_rateOrderByRelevanceInput } from "../inputs/Tax_rateOrderByRelevanceInput";
export declare class Tax_rateOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    tax_identifier?: "asc" | "desc" | undefined;
    zip_post_is_range?: "asc" | "desc" | undefined;
    postcode?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    rate_percent?: "asc" | "desc" | undefined;
    default_store_view?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    _relevance?: Tax_rateOrderByRelevanceInput | undefined;
}
