import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class Product_typesUpdateInput {
    type_name?: NullableStringFieldUpdateOperationsInput | undefined;
    taxes?: NullableStringFieldUpdateOperationsInput | undefined;
    isShippable?: NullableStringFieldUpdateOperationsInput | undefined;
    meta_url?: NullableStringFieldUpdateOperationsInput | undefined;
    meta_description?: NullableStringFieldUpdateOperationsInput | undefined;
    filter_options?: NullableStringFieldUpdateOperationsInput | undefined;
    product_type?: NullableStringFieldUpdateOperationsInput | undefined;
    prod_id?: BigIntFieldUpdateOperationsInput | undefined;
    products?: NullableStringFieldUpdateOperationsInput | undefined;
}
