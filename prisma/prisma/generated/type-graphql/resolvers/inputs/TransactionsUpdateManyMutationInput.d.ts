import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class TransactionsUpdateManyMutationInput {
    transaction_id?: IntFieldUpdateOperationsInput | undefined;
    parent_transaction_id?: IntFieldUpdateOperationsInput | undefined;
    created?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    closed?: NullableStringFieldUpdateOperationsInput | undefined;
}
