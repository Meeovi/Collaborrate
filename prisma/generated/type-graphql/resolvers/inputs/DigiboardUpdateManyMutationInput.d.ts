import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class DigiboardUpdateManyMutationInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    board?: NullableStringFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    student?: NullableStringFieldUpdateOperationsInput | undefined;
    course?: NullableStringFieldUpdateOperationsInput | undefined;
}
