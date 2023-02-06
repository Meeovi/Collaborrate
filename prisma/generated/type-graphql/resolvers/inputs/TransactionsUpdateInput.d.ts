import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class TransactionsUpdateInput {
    order_id?: IntFieldUpdateOperationsInput | undefined;
    transaction_id?: IntFieldUpdateOperationsInput | undefined;
    parent_transaction_id?: IntFieldUpdateOperationsInput | undefined;
    created?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    payment_method?: BigIntFieldUpdateOperationsInput | undefined;
    closed?: NullableStringFieldUpdateOperationsInput | undefined;
    customer_payment?: NullableStringFieldUpdateOperationsInput | undefined;
    orders?: NullableStringFieldUpdateOperationsInput | undefined;
}
