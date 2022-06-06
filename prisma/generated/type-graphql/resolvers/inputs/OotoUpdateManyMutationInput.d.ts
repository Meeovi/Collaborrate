import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class OotoUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    login?: NullableStringFieldUpdateOperationsInput | undefined;
    start_date?: NullableStringFieldUpdateOperationsInput | undefined;
    end_date?: NullableStringFieldUpdateOperationsInput | undefined;
    note?: NullableStringFieldUpdateOperationsInput | undefined;
    using_time?: NullableStringFieldUpdateOperationsInput | undefined;
    location?: NullableStringFieldUpdateOperationsInput | undefined;
}
