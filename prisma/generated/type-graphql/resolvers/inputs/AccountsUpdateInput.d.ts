import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class AccountsUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    website?: NullableStringFieldUpdateOperationsInput | undefined;
    office_phone?: NullableStringFieldUpdateOperationsInput | undefined;
    fax?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    address?: NullableStringFieldUpdateOperationsInput | undefined;
    postalcode?: NullableStringFieldUpdateOperationsInput | undefined;
    city?: NullableStringFieldUpdateOperationsInput | undefined;
    state?: NullableStringFieldUpdateOperationsInput | undefined;
    country?: NullableStringFieldUpdateOperationsInput | undefined;
    assigned_to?: NullableStringFieldUpdateOperationsInput | undefined;
    alt_address?: NullableStringFieldUpdateOperationsInput | undefined;
    alt_postalcode?: NullableStringFieldUpdateOperationsInput | undefined;
    alt_city?: NullableStringFieldUpdateOperationsInput | undefined;
    alt_state?: NullableStringFieldUpdateOperationsInput | undefined;
    alt_country?: NullableStringFieldUpdateOperationsInput | undefined;
    type?: NullableStringFieldUpdateOperationsInput | undefined;
    industry?: NullableStringFieldUpdateOperationsInput | undefined;
    employees?: NullableStringFieldUpdateOperationsInput | undefined;
    annual_revenue?: NullableStringFieldUpdateOperationsInput | undefined;
    member_of?: NullableStringFieldUpdateOperationsInput | undefined;
    campaign?: NullableStringFieldUpdateOperationsInput | undefined;
}
