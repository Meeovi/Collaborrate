import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDecimalFieldUpdateOperationsInput } from "../inputs/NullableDecimalFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SourceUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    code?: IntFieldUpdateOperationsInput | undefined;
    enabled?: NullableBoolFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    latitude?: NullableStringFieldUpdateOperationsInput | undefined;
    longitude?: NullableStringFieldUpdateOperationsInput | undefined;
    pickup_location?: NullableBoolFieldUpdateOperationsInput | undefined;
    contact_name?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    phone?: NullableDecimalFieldUpdateOperationsInput | undefined;
    fax?: NullableDecimalFieldUpdateOperationsInput | undefined;
    country?: NullableStringFieldUpdateOperationsInput | undefined;
    state?: NullableStringFieldUpdateOperationsInput | undefined;
    city?: NullableStringFieldUpdateOperationsInput | undefined;
    street?: NullableStringFieldUpdateOperationsInput | undefined;
    postcode?: NullableDecimalFieldUpdateOperationsInput | undefined;
}
