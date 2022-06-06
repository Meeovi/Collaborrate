import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput } from "../inputs/CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class Customer_groupUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    tax_class?: NullableStringFieldUpdateOperationsInput | undefined;
    customers?: CustomersUpdateOneRequiredWithoutCustomer_group_customer_groupTocustomersInput | undefined;
}
