import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { CustomersUpdateOneRequiredWithoutReturnsInput } from "../inputs/CustomersUpdateOneRequiredWithoutReturnsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductsUpdateOneRequiredWithoutReturnsInput } from "../inputs/ProductsUpdateOneRequiredWithoutReturnsInput";
export declare class ReturnsUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    validity?: NullableStringFieldUpdateOperationsInput | undefined;
    return_prefix?: NullableStringFieldUpdateOperationsInput | undefined;
    customers?: CustomersUpdateOneRequiredWithoutReturnsInput | undefined;
    products?: ProductsUpdateOneRequiredWithoutReturnsInput | undefined;
}
