import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class SurveysUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    assigned_to?: NullableStringFieldUpdateOperationsInput | undefined;
    status?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    question?: NullableStringFieldUpdateOperationsInput | undefined;
    answer?: NullableStringFieldUpdateOperationsInput | undefined;
    submit_text?: NullableStringFieldUpdateOperationsInput | undefined;
    satisfied_text?: NullableStringFieldUpdateOperationsInput | undefined;
    neither_text?: NullableStringFieldUpdateOperationsInput | undefined;
    dissatisfied_text?: NullableStringFieldUpdateOperationsInput | undefined;
}
