import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class Pdf_templatesUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    assigned_to?: NullableStringFieldUpdateOperationsInput | undefined;
    type?: NullableStringFieldUpdateOperationsInput | undefined;
    active?: NullableStringFieldUpdateOperationsInput | undefined;
    page_size?: NullableStringFieldUpdateOperationsInput | undefined;
    orientation?: NullableStringFieldUpdateOperationsInput | undefined;
    content?: NullableStringFieldUpdateOperationsInput | undefined;
    header?: NullableStringFieldUpdateOperationsInput | undefined;
    footer?: NullableStringFieldUpdateOperationsInput | undefined;
    margin_left?: NullableStringFieldUpdateOperationsInput | undefined;
    margin_right?: NullableStringFieldUpdateOperationsInput | undefined;
    margin_top?: NullableStringFieldUpdateOperationsInput | undefined;
    margin_bottom?: NullableStringFieldUpdateOperationsInput | undefined;
    margin_header?: NullableStringFieldUpdateOperationsInput | undefined;
    margin_footer?: NullableStringFieldUpdateOperationsInput | undefined;
}
