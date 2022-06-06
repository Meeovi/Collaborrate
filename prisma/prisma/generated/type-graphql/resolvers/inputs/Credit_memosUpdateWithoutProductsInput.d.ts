import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { CustomersUpdateOneRequiredWithoutCredit_memosInput } from "../inputs/CustomersUpdateOneRequiredWithoutCredit_memosInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class Credit_memosUpdateWithoutProductsInput {
    credit_memo?: StringFieldUpdateOperationsInput | undefined;
    order_number?: IntFieldUpdateOperationsInput | undefined;
    created?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    bill_to_name?: StringFieldUpdateOperationsInput | undefined;
    status?: NullableStringFieldUpdateOperationsInput | undefined;
    refunded?: NullableStringFieldUpdateOperationsInput | undefined;
    action?: NullableStringFieldUpdateOperationsInput | undefined;
    id?: BigIntFieldUpdateOperationsInput | undefined;
    customers?: CustomersUpdateOneRequiredWithoutCredit_memosInput | undefined;
}
