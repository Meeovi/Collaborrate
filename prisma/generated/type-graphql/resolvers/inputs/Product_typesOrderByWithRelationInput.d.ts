import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class Product_typesOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    type_name?: SortOrderInput | undefined;
    taxes?: SortOrderInput | undefined;
    isShippable?: SortOrderInput | undefined;
    meta_url?: SortOrderInput | undefined;
    meta_description?: SortOrderInput | undefined;
    filter_options?: SortOrderInput | undefined;
    product_type?: SortOrderInput | undefined;
    prod_id?: "asc" | "desc" | undefined;
    products?: SortOrderInput | undefined;
}
