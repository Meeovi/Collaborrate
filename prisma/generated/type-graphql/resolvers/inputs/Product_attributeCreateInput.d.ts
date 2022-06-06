import { Product_attribute_setCreateNestedManyWithoutProduct_attributeInput } from "../inputs/Product_attribute_setCreateNestedManyWithoutProduct_attributeInput";
import { ProductsCreateNestedOneWithoutProduct_attributeInput } from "../inputs/ProductsCreateNestedOneWithoutProduct_attributeInput";
export declare class Product_attributeCreateInput {
    default_label?: string | undefined;
    catalog_input_type_store_owner?: string | undefined;
    values_required?: boolean | undefined;
    attribute_code?: string | undefined;
    scope?: string | undefined;
    default_value?: string | undefined;
    unique_value?: boolean | undefined;
    input_validation_store_owner?: string | undefined;
    add_column_options?: boolean | undefined;
    filter_options?: boolean | undefined;
    use_search?: boolean | undefined;
    comparable_storefront?: boolean | undefined;
    layered_navigation?: boolean | undefined;
    search_results_layered_navigation?: boolean | undefined;
    position?: string | undefined;
    promo_rule_conditions?: boolean | undefined;
    allow_html_tags_storefront?: boolean | undefined;
    visible_catalog_pages_storefront?: boolean | undefined;
    used_product_listing?: boolean | undefined;
    used_sorting_product_listing?: boolean | undefined;
    products?: ProductsCreateNestedOneWithoutProduct_attributeInput | undefined;
    product_attribute_set?: Product_attribute_setCreateNestedManyWithoutProduct_attributeInput | undefined;
}
