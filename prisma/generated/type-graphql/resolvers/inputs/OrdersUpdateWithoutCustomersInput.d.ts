import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductsUpdateOneRequiredWithoutOrdersInput } from "../inputs/ProductsUpdateOneRequiredWithoutOrdersInput";
import { QuotesUpdateManyWithoutOrdersInput } from "../inputs/QuotesUpdateManyWithoutOrdersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TransactionsUpdateManyWithoutOrdersInput } from "../inputs/TransactionsUpdateManyWithoutOrdersInput";
export declare class OrdersUpdateWithoutCustomersInput {
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
    products?: ProductsUpdateOneRequiredWithoutOrdersInput | undefined;
    quotes?: QuotesUpdateManyWithoutOrdersInput | undefined;
    transactions?: TransactionsUpdateManyWithoutOrdersInput | undefined;
}
