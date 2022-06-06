import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class MeetingUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    subject?: NullableStringFieldUpdateOperationsInput | undefined;
    start_date?: NullableStringFieldUpdateOperationsInput | undefined;
    end_date?: NullableStringFieldUpdateOperationsInput | undefined;
    duration?: NullableStringFieldUpdateOperationsInput | undefined;
    status?: NullableStringFieldUpdateOperationsInput | undefined;
    related_to?: NullableStringFieldUpdateOperationsInput | undefined;
    reminders?: NullableStringFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    assigned_to?: NullableStringFieldUpdateOperationsInput | undefined;
    invitees?: NullableStringFieldUpdateOperationsInput | undefined;
    scheduling?: NullableStringFieldUpdateOperationsInput | undefined;
}
