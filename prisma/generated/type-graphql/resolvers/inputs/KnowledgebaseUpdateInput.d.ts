import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class KnowledgebaseUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    status?: NullableStringFieldUpdateOperationsInput | undefined;
    revision?: NullableStringFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    resolution?: NullableStringFieldUpdateOperationsInput | undefined;
    author?: NullableStringFieldUpdateOperationsInput | undefined;
    approver?: NullableStringFieldUpdateOperationsInput | undefined;
    date_modified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
