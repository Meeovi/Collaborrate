import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class SchedulerUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    end_date?: NullableStringFieldUpdateOperationsInput | undefined;
    level?: NullableStringFieldUpdateOperationsInput | undefined;
    login?: NullableStringFieldUpdateOperationsInput | undefined;
    notes?: NullableStringFieldUpdateOperationsInput | undefined;
    start_date?: NullableStringFieldUpdateOperationsInput | undefined;
    whid?: NullableStringFieldUpdateOperationsInput | undefined;
    label?: NullableStringFieldUpdateOperationsInput | undefined;
    public?: NullableStringFieldUpdateOperationsInput | undefined;
    permission?: NullableStringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
}
