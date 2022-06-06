import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class General_settingsUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    title?: NullableStringFieldUpdateOperationsInput | undefined;
    tagline?: NullableStringFieldUpdateOperationsInput | undefined;
    url?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    access_restrictions?: NullableStringFieldUpdateOperationsInput | undefined;
    restriction_mode?: NullableStringFieldUpdateOperationsInput | undefined;
    startup_page?: NullableStringFieldUpdateOperationsInput | undefined;
    landing_page?: NullableStringFieldUpdateOperationsInput | undefined;
    http_response?: NullableStringFieldUpdateOperationsInput | undefined;
    store_email?: NullableStringFieldUpdateOperationsInput | undefined;
    store_contact?: NullableStringFieldUpdateOperationsInput | undefined;
    store_contact_two?: NullableStringFieldUpdateOperationsInput | undefined;
    customer_support?: NullableStringFieldUpdateOperationsInput | undefined;
}
