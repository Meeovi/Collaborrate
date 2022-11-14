import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class EventsUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    tickets?: NullableStringFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    start?: NullableStringFieldUpdateOperationsInput | undefined;
    end?: NullableStringFieldUpdateOperationsInput | undefined;
    category?: NullableStringFieldUpdateOperationsInput | undefined;
    city?: NullableStringFieldUpdateOperationsInput | undefined;
    state?: NullableStringFieldUpdateOperationsInput | undefined;
    country?: NullableStringFieldUpdateOperationsInput | undefined;
    postalcode?: NullableStringFieldUpdateOperationsInput | undefined;
    type?: NullableStringFieldUpdateOperationsInput | undefined;
    invitationEmail?: NullableStringFieldUpdateOperationsInput | undefined;
    invitationBillingAddress?: NullableStringFieldUpdateOperationsInput | undefined;
    invitationGrandTotalPurchased?: NullableStringFieldUpdateOperationsInput | undefined;
    invitationInvoiceDate?: NullableStringFieldUpdateOperationsInput | undefined;
    invitationOrderNumber?: NullableStringFieldUpdateOperationsInput | undefined;
    invitationPaymentMethod?: NullableStringFieldUpdateOperationsInput | undefined;
    invitationShippingAddress?: NullableStringFieldUpdateOperationsInput | undefined;
    invitationCustomerName?: NullableStringFieldUpdateOperationsInput | undefined;
    invitationStatus?: NullableStringFieldUpdateOperationsInput | undefined;
    media?: NullableStringFieldUpdateOperationsInput | undefined;
}
