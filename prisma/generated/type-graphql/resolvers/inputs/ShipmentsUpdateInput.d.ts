import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ShipmentsUpdateInput {
    product?: NullableStringFieldUpdateOperationsInput | undefined;
    speed_grade?: NullableStringFieldUpdateOperationsInput | undefined;
    ship_date?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    carrier_name?: StringFieldUpdateOperationsInput | undefined;
    transit_time?: NullableStringFieldUpdateOperationsInput | undefined;
    tracking_url?: NullableStringFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    id?: BigIntFieldUpdateOperationsInput | undefined;
    client_id?: NullableStringFieldUpdateOperationsInput | undefined;
    client_secret?: NullableStringFieldUpdateOperationsInput | undefined;
    country?: NullableStringFieldUpdateOperationsInput | undefined;
    website?: NullableStringFieldUpdateOperationsInput | undefined;
}
