import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ShipmentsUpdateInput {
    product?: StringFieldUpdateOperationsInput | undefined;
    speed_grade?: StringFieldUpdateOperationsInput | undefined;
    ship_date?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    carrier_name?: StringFieldUpdateOperationsInput | undefined;
    transit_time?: NullableStringFieldUpdateOperationsInput | undefined;
    tracking_url?: NullableStringFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    id?: BigIntFieldUpdateOperationsInput | undefined;
}
