import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class RewardsUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    slug?: NullableStringFieldUpdateOperationsInput | undefined;
    level?: NullableStringFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    coupons?: NullableStringFieldUpdateOperationsInput | undefined;
    expiration?: NullableStringFieldUpdateOperationsInput | undefined;
    categories?: NullableStringFieldUpdateOperationsInput | undefined;
    articles?: NullableStringFieldUpdateOperationsInput | undefined;
    products?: NullableStringFieldUpdateOperationsInput | undefined;
    customers?: NullableStringFieldUpdateOperationsInput | undefined;
    users?: NullableStringFieldUpdateOperationsInput | undefined;
}
