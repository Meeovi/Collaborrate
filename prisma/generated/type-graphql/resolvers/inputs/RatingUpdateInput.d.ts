import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDecimalFieldUpdateOperationsInput } from "../inputs/NullableDecimalFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductsUpdateOneRequiredWithoutRatingInput } from "../inputs/ProductsUpdateOneRequiredWithoutRatingInput";
export declare class RatingUpdateInput {
    default_value?: NullableStringFieldUpdateOperationsInput | undefined;
    default_store_view?: NullableStringFieldUpdateOperationsInput | undefined;
    rating_visibility?: NullableStringFieldUpdateOperationsInput | undefined;
    active?: NullableBoolFieldUpdateOperationsInput | undefined;
    sort_order?: NullableDecimalFieldUpdateOperationsInput | undefined;
    products?: ProductsUpdateOneRequiredWithoutRatingInput | undefined;
}
