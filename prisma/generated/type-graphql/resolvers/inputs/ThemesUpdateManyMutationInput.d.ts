import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ThemesUpdateManyMutationInput {
    title?: NullableStringFieldUpdateOperationsInput | undefined;
    parent_theme?: NullableStringFieldUpdateOperationsInput | undefined;
    theme_path?: NullableStringFieldUpdateOperationsInput | undefined;
    action?: NullableStringFieldUpdateOperationsInput | undefined;
    website_id?: BigIntFieldUpdateOperationsInput | undefined;
    websites?: StringFieldUpdateOperationsInput | undefined;
}
