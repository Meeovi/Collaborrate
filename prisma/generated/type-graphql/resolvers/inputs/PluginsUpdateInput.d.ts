import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class PluginsUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    url?: NullableStringFieldUpdateOperationsInput | undefined;
    github_link?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    logo?: NullableStringFieldUpdateOperationsInput | undefined;
    screenshots?: NullableStringFieldUpdateOperationsInput | undefined;
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    publisher_name?: NullableStringFieldUpdateOperationsInput | undefined;
    agree_terms?: NullableBoolFieldUpdateOperationsInput | undefined;
    publisher_email?: NullableStringFieldUpdateOperationsInput | undefined;
}
