import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class Tax_rateUpdateWithoutProductsInput {
    tax_identifier?: StringFieldUpdateOperationsInput | undefined;
    zip_post_is_range?: NullableBoolFieldUpdateOperationsInput | undefined;
    postcode?: NullableStringFieldUpdateOperationsInput | undefined;
    state?: NullableStringFieldUpdateOperationsInput | undefined;
    country?: NullableStringFieldUpdateOperationsInput | undefined;
    rate_percent?: NullableStringFieldUpdateOperationsInput | undefined;
    default_store_view?: NullableStringFieldUpdateOperationsInput | undefined;
}
