import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class CustomizationsUpdateInput {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    site_name?: NullableStringFieldUpdateOperationsInput | undefined;
    nav_link?: NullableStringFieldUpdateOperationsInput | undefined;
    notification?: NullableStringFieldUpdateOperationsInput | undefined;
    banner?: NullableStringFieldUpdateOperationsInput | undefined;
    footer_link?: NullableStringFieldUpdateOperationsInput | undefined;
    announcement?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    site_url?: NullableStringFieldUpdateOperationsInput | undefined;
    allow_signup?: NullableStringFieldUpdateOperationsInput | undefined;
}
