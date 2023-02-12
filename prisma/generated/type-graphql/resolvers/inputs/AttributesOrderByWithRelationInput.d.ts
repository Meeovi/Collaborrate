import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class AttributesOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    default_label?: SortOrderInput | undefined;
    attribute_code?: SortOrderInput | undefined;
    filter_options?: SortOrderInput | undefined;
    use_search?: SortOrderInput | undefined;
    layered_navigation?: SortOrderInput | undefined;
    search_results_layered_navigation?: SortOrderInput | undefined;
    position?: SortOrderInput | undefined;
    promo_rule_conditions?: SortOrderInput | undefined;
    allow_html_tags_storefront?: SortOrderInput | undefined;
    visible_catalog_pages_storefront?: SortOrderInput | undefined;
    used_product_listing?: SortOrderInput | undefined;
    used_sorting_product_listing?: SortOrderInput | undefined;
    prod_id?: "asc" | "desc" | undefined;
    attribute_class?: SortOrderInput | undefined;
    attribute_value?: SortOrderInput | undefined;
    column_options?: SortOrderInput | undefined;
    faceted_navigation?: SortOrderInput | undefined;
    isPublic?: SortOrderInput | undefined;
    meta_description?: SortOrderInput | undefined;
    meta_name?: SortOrderInput | undefined;
    meta_url?: SortOrderInput | undefined;
    product_attribute_set?: SortOrderInput | undefined;
    products?: SortOrderInput | undefined;
}
