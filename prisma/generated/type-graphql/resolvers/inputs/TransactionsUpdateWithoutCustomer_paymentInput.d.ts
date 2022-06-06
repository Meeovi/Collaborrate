import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrdersUpdateOneRequiredWithoutTransactionsInput } from "../inputs/OrdersUpdateOneRequiredWithoutTransactionsInput";
export declare class TransactionsUpdateWithoutCustomer_paymentInput {
    transaction_id?: IntFieldUpdateOperationsInput | undefined;
    parent_transaction_id?: IntFieldUpdateOperationsInput | undefined;
    created?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    closed?: NullableStringFieldUpdateOperationsInput | undefined;
    orders?: OrdersUpdateOneRequiredWithoutTransactionsInput | undefined;
}
