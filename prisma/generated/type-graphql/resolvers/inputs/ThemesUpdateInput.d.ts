import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { WebsitesUpdateOneRequiredWithoutThemesInput } from "../inputs/WebsitesUpdateOneRequiredWithoutThemesInput";
export declare class ThemesUpdateInput {
    title?: NullableStringFieldUpdateOperationsInput | undefined;
    parent_theme?: NullableStringFieldUpdateOperationsInput | undefined;
    theme_path?: NullableStringFieldUpdateOperationsInput | undefined;
    action?: NullableStringFieldUpdateOperationsInput | undefined;
    websites?: WebsitesUpdateOneRequiredWithoutThemesInput | undefined;
}
