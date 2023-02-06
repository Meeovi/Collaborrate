import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class ChannelsUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    code?: NullableStringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    currency?: NullableStringFieldUpdateOperationsInput | undefined;
    default_lang?: NullableStringFieldUpdateOperationsInput | undefined;
    include_tax?: NullableStringFieldUpdateOperationsInput | undefined;
    default_zone?: NullableStringFieldUpdateOperationsInput | undefined;
    default_shipping?: NullableStringFieldUpdateOperationsInput | undefined;
    client_id?: NullableStringFieldUpdateOperationsInput | undefined;
    client_secret?: NullableStringFieldUpdateOperationsInput | undefined;
}
