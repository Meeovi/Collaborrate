import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class EndofshiftUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    login?: NullableStringFieldUpdateOperationsInput | undefined;
    mcms?: NullableStringFieldUpdateOperationsInput | undefined;
    next_shift?: NullableStringFieldUpdateOperationsInput | undefined;
    projects?: NullableStringFieldUpdateOperationsInput | undefined;
    tickets?: NullableStringFieldUpdateOperationsInput | undefined;
    whid?: NullableStringFieldUpdateOperationsInput | undefined;
}
