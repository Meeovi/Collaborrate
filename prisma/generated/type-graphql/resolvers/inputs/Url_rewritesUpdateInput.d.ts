import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class Url_rewritesUpdateInput {
    request_path?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    redirect_type?: NullableBoolFieldUpdateOperationsInput | undefined;
    target_path?: NullableStringFieldUpdateOperationsInput | undefined;
    store?: NullableStringFieldUpdateOperationsInput | undefined;
}
