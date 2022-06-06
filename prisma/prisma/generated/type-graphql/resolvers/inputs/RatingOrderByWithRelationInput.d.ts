import { ProductsOrderByWithRelationInput } from "../inputs/ProductsOrderByWithRelationInput";
export declare class RatingOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    default_value?: "asc" | "desc" | undefined;
    default_store_view?: "asc" | "desc" | undefined;
    rating_visibility?: "asc" | "desc" | undefined;
    active?: "asc" | "desc" | undefined;
    sort_order?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    products?: ProductsOrderByWithRelationInput | undefined;
}
