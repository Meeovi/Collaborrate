import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ThemesUpdateManyWithoutWebsitesInput } from "../inputs/ThemesUpdateManyWithoutWebsitesInput";
export declare class WebsitesUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    url?: NullableStringFieldUpdateOperationsInput | undefined;
    shop?: NullableStringFieldUpdateOperationsInput | undefined;
    store?: NullableStringFieldUpdateOperationsInput | undefined;
    themes?: ThemesUpdateManyWithoutWebsitesInput | undefined;
}
