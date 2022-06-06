import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class TasksUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    subject?: NullableStringFieldUpdateOperationsInput | undefined;
    start_date?: NullableStringFieldUpdateOperationsInput | undefined;
    due_date?: NullableStringFieldUpdateOperationsInput | undefined;
    priority?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    status?: NullableStringFieldUpdateOperationsInput | undefined;
    related_to?: NullableStringFieldUpdateOperationsInput | undefined;
    contact?: NullableStringFieldUpdateOperationsInput | undefined;
    assigned_to?: NullableStringFieldUpdateOperationsInput | undefined;
    date_modified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
