import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class TicketingUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    location?: NullableStringFieldUpdateOperationsInput | undefined;
    date?: NullableStringFieldUpdateOperationsInput | undefined;
    severity?: NullableStringFieldUpdateOperationsInput | undefined;
    team?: NullableStringFieldUpdateOperationsInput | undefined;
    requester?: NullableStringFieldUpdateOperationsInput | undefined;
    requester_email?: NullableStringFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    department?: NullableStringFieldUpdateOperationsInput | undefined;
    media?: NullableStringFieldUpdateOperationsInput | undefined;
    projects?: NullableStringFieldUpdateOperationsInput | undefined;
    ticket_type?: NullableStringFieldUpdateOperationsInput | undefined;
    comment?: NullableStringFieldUpdateOperationsInput | undefined;
    products?: NullableStringFieldUpdateOperationsInput | undefined;
    priority?: NullableStringFieldUpdateOperationsInput | undefined;
    status?: NullableStringFieldUpdateOperationsInput | undefined;
    resolution?: NullableStringFieldUpdateOperationsInput | undefined;
    assigned_to?: NullableStringFieldUpdateOperationsInput | undefined;
    date_modified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    account_name?: NullableStringFieldUpdateOperationsInput | undefined;
    level?: NullableStringFieldUpdateOperationsInput | undefined;
    projects_projectsToticketing?: NullableStringFieldUpdateOperationsInput | undefined;
}
