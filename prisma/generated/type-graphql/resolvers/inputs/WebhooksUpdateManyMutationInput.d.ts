import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class WebhooksUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    url?: StringFieldUpdateOperationsInput | undefined;
    headers?: NullableStringFieldUpdateOperationsInput | undefined;
    create?: NullableStringFieldUpdateOperationsInput | undefined;
    retrieve?: NullableStringFieldUpdateOperationsInput | undefined;
    update?: NullableStringFieldUpdateOperationsInput | undefined;
    delete?: NullableStringFieldUpdateOperationsInput | undefined;
    publish?: NullableStringFieldUpdateOperationsInput | undefined;
    unpublish?: NullableStringFieldUpdateOperationsInput | undefined;
}
