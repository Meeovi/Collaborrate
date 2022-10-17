import { Product_typesOrderByRelevanceInput } from "../inputs/Product_typesOrderByRelevanceInput";
export declare class Product_typesOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    type_name?: "asc" | "desc" | undefined;
    taxes?: "asc" | "desc" | undefined;
    isShippable?: "asc" | "desc" | undefined;
    meta_url?: "asc" | "desc" | undefined;
    meta_description?: "asc" | "desc" | undefined;
    filter_options?: "asc" | "desc" | undefined;
    product_type?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    _relevance?: Product_typesOrderByRelevanceInput | undefined;
}
