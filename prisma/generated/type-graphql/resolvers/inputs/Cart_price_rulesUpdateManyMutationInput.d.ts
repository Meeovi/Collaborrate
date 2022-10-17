import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableDecimalFieldUpdateOperationsInput } from "../inputs/NullableDecimalFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class Cart_price_rulesUpdateManyMutationInput {
    rule?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    active?: NullableBoolFieldUpdateOperationsInput | undefined;
    coupon?: NullableStringFieldUpdateOperationsInput | undefined;
    uses_per_customer?: NullableStringFieldUpdateOperationsInput | undefined;
    priority?: NullableStringFieldUpdateOperationsInput | undefined;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    status?: NullableStringFieldUpdateOperationsInput | undefined;
    website?: NullableStringFieldUpdateOperationsInput | undefined;
    actions_apply?: NullableStringFieldUpdateOperationsInput | undefined;
    actions_discount_amount?: NullableDecimalFieldUpdateOperationsInput | undefined;
    actions_discard_subsequent_rules?: NullableBoolFieldUpdateOperationsInput | undefined;
    actions_max_qty_discount_is_applied_to?: NullableDecimalFieldUpdateOperationsInput | undefined;
    actions_discount_qty_step?: NullableDecimalFieldUpdateOperationsInput | undefined;
    actions_apply_shipping_amount?: NullableBoolFieldUpdateOperationsInput | undefined;
}
