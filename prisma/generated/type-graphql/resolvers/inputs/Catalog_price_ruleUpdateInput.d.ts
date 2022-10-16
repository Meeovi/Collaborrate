import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableDecimalFieldUpdateOperationsInput } from "../inputs/NullableDecimalFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class Catalog_price_ruleUpdateInput {
    rule?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    active?: NullableBoolFieldUpdateOperationsInput | undefined;
    customer_groups?: NullableStringFieldUpdateOperationsInput | undefined;
    priority?: NullableStringFieldUpdateOperationsInput | undefined;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    status?: NullableStringFieldUpdateOperationsInput | undefined;
    website?: NullableStringFieldUpdateOperationsInput | undefined;
    actions_apply?: NullableStringFieldUpdateOperationsInput | undefined;
    actions_discount_amount?: NullableDecimalFieldUpdateOperationsInput | undefined;
    actions_discard_subsequent_rules?: NullableBoolFieldUpdateOperationsInput | undefined;
}
