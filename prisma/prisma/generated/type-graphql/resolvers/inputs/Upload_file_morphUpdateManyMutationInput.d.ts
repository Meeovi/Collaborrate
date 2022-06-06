import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class Upload_file_morphUpdateManyMutationInput {
    upload_file_id?: NullableIntFieldUpdateOperationsInput | undefined;
    related_id?: NullableIntFieldUpdateOperationsInput | undefined;
    related_type?: NullableStringFieldUpdateOperationsInput | undefined;
    field?: NullableStringFieldUpdateOperationsInput | undefined;
    order?: NullableIntFieldUpdateOperationsInput | undefined;
}
