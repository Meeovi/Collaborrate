import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class EmailsUpdateManyMutationInput {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    subject?: NullableStringFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    cust_id?: IntFieldUpdateOperationsInput | undefined;
    bcc?: NullableStringFieldUpdateOperationsInput | undefined;
    cc?: NullableStringFieldUpdateOperationsInput | undefined;
    from?: NullableStringFieldUpdateOperationsInput | undefined;
    media?: NullableStringFieldUpdateOperationsInput | undefined;
    staff_id?: NullableIntFieldUpdateOperationsInput | undefined;
    customers?: NullableStringFieldUpdateOperationsInput | undefined;
    users?: NullableStringFieldUpdateOperationsInput | undefined;
}
