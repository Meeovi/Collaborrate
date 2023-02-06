import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class OrdersUpdateInput {
    purchase_point?: NullableIntFieldUpdateOperationsInput | undefined;
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    bill_to_name?: StringFieldUpdateOperationsInput | undefined;
    ship_to_name?: NullableStringFieldUpdateOperationsInput | undefined;
    grand_total_base?: NullableIntFieldUpdateOperationsInput | undefined;
    grand_total_purchased?: NullableIntFieldUpdateOperationsInput | undefined;
    status?: NullableBoolFieldUpdateOperationsInput | undefined;
    action?: NullableBoolFieldUpdateOperationsInput | undefined;
    allocated_sources?: NullableStringFieldUpdateOperationsInput | undefined;
    braintree_transaction_source?: NullableStringFieldUpdateOperationsInput | undefined;
    cust_id?: IntFieldUpdateOperationsInput | undefined;
    prod_id?: BigIntFieldUpdateOperationsInput | undefined;
    customers?: NullableStringFieldUpdateOperationsInput | undefined;
    products?: NullableStringFieldUpdateOperationsInput | undefined;
    quotes?: NullableStringFieldUpdateOperationsInput | undefined;
    transactions?: NullableStringFieldUpdateOperationsInput | undefined;
}
