import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class StocksUpdateManyMutationInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    enabled?: NullableBoolFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    website?: NullableStringFieldUpdateOperationsInput | undefined;
    sources?: NullableStringFieldUpdateOperationsInput | undefined;
}
