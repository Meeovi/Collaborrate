import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class RolesUpdateInput {
    role_name?: StringFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    type?: NullableStringFieldUpdateOperationsInput | undefined;
    createRole?: NullableStringFieldUpdateOperationsInput | undefined;
    updateRole?: NullableStringFieldUpdateOperationsInput | undefined;
    deleteRole?: NullableStringFieldUpdateOperationsInput | undefined;
    publishRole?: NullableStringFieldUpdateOperationsInput | undefined;
    unpublishRole?: NullableStringFieldUpdateOperationsInput | undefined;
    role?: NullableStringFieldUpdateOperationsInput | undefined;
}
