import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class Sales_settingsUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    sales_email?: NullableStringFieldUpdateOperationsInput | undefined;
    hide_customer_ip?: NullableStringFieldUpdateOperationsInput | undefined;
    checkout_subtotal?: NullableStringFieldUpdateOperationsInput | undefined;
    checkout_discount?: NullableStringFieldUpdateOperationsInput | undefined;
    checkout_shipping?: NullableStringFieldUpdateOperationsInput | undefined;
    checkout_tax?: NullableStringFieldUpdateOperationsInput | undefined;
    checkout_fixed_product_tax?: NullableStringFieldUpdateOperationsInput | undefined;
    checkout_grand_total?: NullableStringFieldUpdateOperationsInput | undefined;
    checkout_gift_cards?: NullableStringFieldUpdateOperationsInput | undefined;
    checkout_store_credit?: NullableStringFieldUpdateOperationsInput | undefined;
    allow_reorder?: NullableStringFieldUpdateOperationsInput | undefined;
    allow_zero_grandtotal?: NullableStringFieldUpdateOperationsInput | undefined;
    invoice_logo?: NullableStringFieldUpdateOperationsInput | undefined;
    invoice_html_print?: NullableStringFieldUpdateOperationsInput | undefined;
    invoice_address?: NullableStringFieldUpdateOperationsInput | undefined;
}
