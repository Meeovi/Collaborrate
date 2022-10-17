import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableDecimalFieldUpdateOperationsInput } from "../inputs/NullableDecimalFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class ReportsUpdateInput {
    customer?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    products?: NullableStringFieldUpdateOperationsInput | undefined;
    quantity?: NullableDecimalFieldUpdateOperationsInput | undefined;
    subtotal?: NullableStringFieldUpdateOperationsInput | undefined;
    applied_coupon?: NullableStringFieldUpdateOperationsInput | undefined;
    created?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updated?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    ip_address?: NullableStringFieldUpdateOperationsInput | undefined;
}
