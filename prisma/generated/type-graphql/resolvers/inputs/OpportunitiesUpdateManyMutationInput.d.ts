import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class OpportunitiesUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    amount?: NullableStringFieldUpdateOperationsInput | undefined;
    sales_stage?: NullableStringFieldUpdateOperationsInput | undefined;
    currency?: NullableStringFieldUpdateOperationsInput | undefined;
    probability?: NullableStringFieldUpdateOperationsInput | undefined;
    next_step?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    assigned_to?: NullableStringFieldUpdateOperationsInput | undefined;
    lead_source?: NullableStringFieldUpdateOperationsInput | undefined;
    campaign?: NullableStringFieldUpdateOperationsInput | undefined;
    type?: NullableStringFieldUpdateOperationsInput | undefined;
    account_name?: NullableStringFieldUpdateOperationsInput | undefined;
    expected_close_date?: NullableStringFieldUpdateOperationsInput | undefined;
}
