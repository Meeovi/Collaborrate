import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductsUpdateOneRequiredWithoutProduct_attributeInput } from "../inputs/ProductsUpdateOneRequiredWithoutProduct_attributeInput";
export declare class Product_attributeUpdateWithoutProduct_attribute_setInput {
    default_label?: NullableStringFieldUpdateOperationsInput | undefined;
    catalog_input_type_store_owner?: NullableStringFieldUpdateOperationsInput | undefined;
    values_required?: NullableBoolFieldUpdateOperationsInput | undefined;
    attribute_code?: NullableStringFieldUpdateOperationsInput | undefined;
    scope?: NullableStringFieldUpdateOperationsInput | undefined;
    default_value?: NullableStringFieldUpdateOperationsInput | undefined;
    unique_value?: NullableBoolFieldUpdateOperationsInput | undefined;
    input_validation_store_owner?: NullableStringFieldUpdateOperationsInput | undefined;
    add_column_options?: NullableBoolFieldUpdateOperationsInput | undefined;
    filter_options?: NullableBoolFieldUpdateOperationsInput | undefined;
    use_search?: NullableBoolFieldUpdateOperationsInput | undefined;
    comparable_storefront?: NullableBoolFieldUpdateOperationsInput | undefined;
    layered_navigation?: NullableBoolFieldUpdateOperationsInput | undefined;
    search_results_layered_navigation?: NullableBoolFieldUpdateOperationsInput | undefined;
    position?: NullableStringFieldUpdateOperationsInput | undefined;
    promo_rule_conditions?: NullableBoolFieldUpdateOperationsInput | undefined;
    allow_html_tags_storefront?: NullableBoolFieldUpdateOperationsInput | undefined;
    visible_catalog_pages_storefront?: NullableBoolFieldUpdateOperationsInput | undefined;
    used_product_listing?: NullableBoolFieldUpdateOperationsInput | undefined;
    used_sorting_product_listing?: NullableBoolFieldUpdateOperationsInput | undefined;
    products?: ProductsUpdateOneRequiredWithoutProduct_attributeInput | undefined;
}
