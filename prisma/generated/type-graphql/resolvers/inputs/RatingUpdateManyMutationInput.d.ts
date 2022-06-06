import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDecimalFieldUpdateOperationsInput } from "../inputs/NullableDecimalFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class RatingUpdateManyMutationInput {
    default_value?: NullableStringFieldUpdateOperationsInput | undefined;
    default_store_view?: NullableStringFieldUpdateOperationsInput | undefined;
    rating_visibility?: NullableStringFieldUpdateOperationsInput | undefined;
    active?: NullableBoolFieldUpdateOperationsInput | undefined;
    sort_order?: NullableDecimalFieldUpdateOperationsInput | undefined;
}
