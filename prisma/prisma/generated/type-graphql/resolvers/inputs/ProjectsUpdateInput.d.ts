import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class ProjectsUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    project_manager?: NullableStringFieldUpdateOperationsInput | undefined;
    start_date?: NullableStringFieldUpdateOperationsInput | undefined;
    end_date?: NullableStringFieldUpdateOperationsInput | undefined;
    resource?: NullableStringFieldUpdateOperationsInput | undefined;
    considerworkingdays?: NullableStringFieldUpdateOperationsInput | undefined;
    project_template?: NullableStringFieldUpdateOperationsInput | undefined;
    status?: NullableStringFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
