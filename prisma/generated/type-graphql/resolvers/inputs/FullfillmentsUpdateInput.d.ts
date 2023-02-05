import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class FullfillmentsUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    shipping_zones?: NullableStringFieldUpdateOperationsInput | undefined;
    company?: NullableStringFieldUpdateOperationsInput | undefined;
    address?: NullableStringFieldUpdateOperationsInput | undefined;
    address_two?: NullableStringFieldUpdateOperationsInput | undefined;
    city?: NullableStringFieldUpdateOperationsInput | undefined;
    state?: NullableStringFieldUpdateOperationsInput | undefined;
    zipcode?: NullableStringFieldUpdateOperationsInput | undefined;
    country?: NullableStringFieldUpdateOperationsInput | undefined;
    country_area?: NullableStringFieldUpdateOperationsInput | undefined;
    phone?: NullableStringFieldUpdateOperationsInput | undefined;
    pickup?: NullableStringFieldUpdateOperationsInput | undefined;
    stock?: NullableStringFieldUpdateOperationsInput | undefined;
}
