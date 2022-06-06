import { Customer_paymentUpdateOneRequiredWithoutTransactionsInput } from "../inputs/Customer_paymentUpdateOneRequiredWithoutTransactionsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class TransactionsUpdateWithoutOrdersInput {
    transaction_id?: IntFieldUpdateOperationsInput | undefined;
    parent_transaction_id?: IntFieldUpdateOperationsInput | undefined;
    created?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    closed?: NullableStringFieldUpdateOperationsInput | undefined;
    customer_payment?: Customer_paymentUpdateOneRequiredWithoutTransactionsInput | undefined;
}
