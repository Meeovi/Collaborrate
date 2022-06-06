import { Customer_paymentUpdateOneRequiredWithoutTransactionsInput } from "../inputs/Customer_paymentUpdateOneRequiredWithoutTransactionsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrdersUpdateOneRequiredWithoutTransactionsInput } from "../inputs/OrdersUpdateOneRequiredWithoutTransactionsInput";
export declare class TransactionsUpdateInput {
    transaction_id?: IntFieldUpdateOperationsInput | undefined;
    parent_transaction_id?: IntFieldUpdateOperationsInput | undefined;
    created?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    closed?: NullableStringFieldUpdateOperationsInput | undefined;
    orders?: OrdersUpdateOneRequiredWithoutTransactionsInput | undefined;
    customer_payment?: Customer_paymentUpdateOneRequiredWithoutTransactionsInput | undefined;
}
