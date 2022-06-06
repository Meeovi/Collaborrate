import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Product_attributeUpdateOneRequiredWithoutProduct_attribute_setInput } from "../inputs/Product_attributeUpdateOneRequiredWithoutProduct_attribute_setInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class Product_attribute_setUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    based_on?: NullableStringFieldUpdateOperationsInput | undefined;
    product_attribute?: Product_attributeUpdateOneRequiredWithoutProduct_attribute_setInput | undefined;
}
