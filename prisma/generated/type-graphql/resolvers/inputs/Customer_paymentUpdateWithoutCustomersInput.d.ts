import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableBigIntFieldUpdateOperationsInput } from "../inputs/NullableBigIntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { TransactionsUpdateManyWithoutCustomer_paymentInput } from "../inputs/TransactionsUpdateManyWithoutCustomer_paymentInput";
export declare class Customer_paymentUpdateWithoutCustomersInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    payment_info?: NullableStringFieldUpdateOperationsInput | undefined;
    provider?: NullableStringFieldUpdateOperationsInput | undefined;
    account_no?: BigIntFieldUpdateOperationsInput | undefined;
    expiry?: NullableBigIntFieldUpdateOperationsInput | undefined;
    transactions?: TransactionsUpdateManyWithoutCustomer_paymentInput | undefined;
}
