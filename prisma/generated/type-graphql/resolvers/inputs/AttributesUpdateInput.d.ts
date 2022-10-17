import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class AttributesUpdateInput {
    default_label?: NullableStringFieldUpdateOperationsInput | undefined;
    attribute_code?: NullableStringFieldUpdateOperationsInput | undefined;
    filter_options?: NullableStringFieldUpdateOperationsInput | undefined;
    use_search?: NullableStringFieldUpdateOperationsInput | undefined;
    layered_navigation?: NullableBoolFieldUpdateOperationsInput | undefined;
    search_results_layered_navigation?: NullableBoolFieldUpdateOperationsInput | undefined;
    position?: NullableStringFieldUpdateOperationsInput | undefined;
    promo_rule_conditions?: NullableBoolFieldUpdateOperationsInput | undefined;
    allow_html_tags_storefront?: NullableBoolFieldUpdateOperationsInput | undefined;
    visible_catalog_pages_storefront?: NullableBoolFieldUpdateOperationsInput | undefined;
    used_product_listing?: NullableBoolFieldUpdateOperationsInput | undefined;
    used_sorting_product_listing?: NullableBoolFieldUpdateOperationsInput | undefined;
    prod_id?: BigIntFieldUpdateOperationsInput | undefined;
    attribute_class?: NullableStringFieldUpdateOperationsInput | undefined;
    attribute_value?: NullableStringFieldUpdateOperationsInput | undefined;
    column_options?: NullableStringFieldUpdateOperationsInput | undefined;
    faceted_navigation?: NullableBoolFieldUpdateOperationsInput | undefined;
    isPublic?: NullableStringFieldUpdateOperationsInput | undefined;
    meta_description?: NullableStringFieldUpdateOperationsInput | undefined;
    meta_name?: NullableBoolFieldUpdateOperationsInput | undefined;
    meta_url?: NullableStringFieldUpdateOperationsInput | undefined;
    product_attribute_set?: NullableStringFieldUpdateOperationsInput | undefined;
    products?: NullableStringFieldUpdateOperationsInput | undefined;
}
