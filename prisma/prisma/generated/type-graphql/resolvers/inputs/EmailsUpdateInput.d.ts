import { CustomersUpdateOneRequiredWithoutEmailsInput } from "../inputs/CustomersUpdateOneRequiredWithoutEmailsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class EmailsUpdateInput {
    title?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    subject?: NullableStringFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    recipients?: NullableStringFieldUpdateOperationsInput | undefined;
    customers?: CustomersUpdateOneRequiredWithoutEmailsInput | undefined;
}
