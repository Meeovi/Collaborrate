import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class Email_templatesUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    assigned_to?: NullableStringFieldUpdateOperationsInput | undefined;
    type?: NullableStringFieldUpdateOperationsInput | undefined;
    active?: NullableStringFieldUpdateOperationsInput | undefined;
    insert_variable?: NullableStringFieldUpdateOperationsInput | undefined;
    subject?: NullableStringFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    header?: NullableStringFieldUpdateOperationsInput | undefined;
    footer?: NullableStringFieldUpdateOperationsInput | undefined;
    width?: NullableStringFieldUpdateOperationsInput | undefined;
    height?: NullableStringFieldUpdateOperationsInput | undefined;
    media?: NullableStringFieldUpdateOperationsInput | undefined;
}
