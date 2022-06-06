import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { CustomersUpdateOneRequiredWithoutCustomer_paymentInput } from "../inputs/CustomersUpdateOneRequiredWithoutCustomer_paymentInput";
import { NullableBigIntFieldUpdateOperationsInput } from "../inputs/NullableBigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { TransactionsUpdateManyWithoutCustomer_paymentInput } from "../inputs/TransactionsUpdateManyWithoutCustomer_paymentInput";
export declare class Customer_paymentUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    payment_info?: NullableStringFieldUpdateOperationsInput | undefined;
    provider?: NullableStringFieldUpdateOperationsInput | undefined;
    account_no?: BigIntFieldUpdateOperationsInput | undefined;
    expiry?: NullableBigIntFieldUpdateOperationsInput | undefined;
    customers?: CustomersUpdateOneRequiredWithoutCustomer_paymentInput | undefined;
    transactions?: TransactionsUpdateManyWithoutCustomer_paymentInput | undefined;
}
