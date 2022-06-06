import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class Newsletter_subscribersUpdateWithoutCustomersInput {
    email?: StringFieldUpdateOperationsInput | undefined;
    customer_first_name?: NullableStringFieldUpdateOperationsInput | undefined;
    customer_last_name?: NullableStringFieldUpdateOperationsInput | undefined;
    store?: NullableStringFieldUpdateOperationsInput | undefined;
    status?: NullableStringFieldUpdateOperationsInput | undefined;
    websites?: NullableStringFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
