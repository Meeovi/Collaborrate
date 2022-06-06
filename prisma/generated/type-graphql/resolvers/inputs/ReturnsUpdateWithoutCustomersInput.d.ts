import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductsUpdateOneRequiredWithoutReturnsInput } from "../inputs/ProductsUpdateOneRequiredWithoutReturnsInput";
export declare class ReturnsUpdateWithoutCustomersInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    validity?: NullableStringFieldUpdateOperationsInput | undefined;
    return_prefix?: NullableStringFieldUpdateOperationsInput | undefined;
    products?: ProductsUpdateOneRequiredWithoutReturnsInput | undefined;
}
