import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class InvoicesUpdateInput {
    invoice?: IntFieldUpdateOperationsInput | undefined;
    order_number?: BigIntFieldUpdateOperationsInput | undefined;
    invoice_date?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    bill_to_name?: StringFieldUpdateOperationsInput | undefined;
    billing_address?: NullableStringFieldUpdateOperationsInput | undefined;
    grand_total_base?: NullableStringFieldUpdateOperationsInput | undefined;
    grand_total_purchased?: NullableStringFieldUpdateOperationsInput | undefined;
    status?: NullableStringFieldUpdateOperationsInput | undefined;
    shipping_address?: NullableStringFieldUpdateOperationsInput | undefined;
    customer_name?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    customer_group?: NullableStringFieldUpdateOperationsInput | undefined;
    payment_method?: NullableStringFieldUpdateOperationsInput | undefined;
    shipping_information?: NullableStringFieldUpdateOperationsInput | undefined;
    subtotal?: NullableStringFieldUpdateOperationsInput | undefined;
    shipping_and_handling?: NullableStringFieldUpdateOperationsInput | undefined;
    id?: BigIntFieldUpdateOperationsInput | undefined;
}
