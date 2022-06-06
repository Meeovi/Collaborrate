import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class PagesUpdateInput {
    enable_page?: NullableBoolFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    content_title?: NullableStringFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    url_key?: NullableStringFieldUpdateOperationsInput | undefined;
    meta_title?: NullableStringFieldUpdateOperationsInput | undefined;
    meta_keywords?: NullableStringFieldUpdateOperationsInput | undefined;
    meta_description?: NullableStringFieldUpdateOperationsInput | undefined;
}
