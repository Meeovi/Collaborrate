import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class CustomerUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    firstname?: NullableStringFieldUpdateOperationsInput | undefined;
    lastname?: NullableStringFieldUpdateOperationsInput | undefined;
    username?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    city?: NullableStringFieldUpdateOperationsInput | undefined;
    state?: NullableStringFieldUpdateOperationsInput | undefined;
    country?: NullableStringFieldUpdateOperationsInput | undefined;
    postal?: NullableStringFieldUpdateOperationsInput | undefined;
    active?: NullableStringFieldUpdateOperationsInput | undefined;
}
