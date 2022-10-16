import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class AnalyticsUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    country?: NullableStringFieldUpdateOperationsInput | undefined;
    share_data?: NullableStringFieldUpdateOperationsInput | undefined;
    website_name?: NullableStringFieldUpdateOperationsInput | undefined;
    client_id?: NullableStringFieldUpdateOperationsInput | undefined;
    client_secret?: NullableStringFieldUpdateOperationsInput | undefined;
    tracking_id?: NullableStringFieldUpdateOperationsInput | undefined;
    property_name?: NullableStringFieldUpdateOperationsInput | undefined;
    url?: NullableStringFieldUpdateOperationsInput | undefined;
    default_view?: NullableStringFieldUpdateOperationsInput | undefined;
    category?: NullableStringFieldUpdateOperationsInput | undefined;
    property_hit?: NullableStringFieldUpdateOperationsInput | undefined;
    tracking_code?: NullableStringFieldUpdateOperationsInput | undefined;
    data_collection?: NullableBoolFieldUpdateOperationsInput | undefined;
    data_retention?: NullableBoolFieldUpdateOperationsInput | undefined;
    search_analytics?: NullableStringFieldUpdateOperationsInput | undefined;
}
