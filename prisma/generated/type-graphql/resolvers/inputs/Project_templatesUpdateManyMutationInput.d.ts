import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class Project_templatesUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    status?: NullableStringFieldUpdateOperationsInput | undefined;
    consider_working_days?: NullableStringFieldUpdateOperationsInput | undefined;
    priority?: NullableStringFieldUpdateOperationsInput | undefined;
    project_manager?: NullableStringFieldUpdateOperationsInput | undefined;
    resource?: NullableStringFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
}
