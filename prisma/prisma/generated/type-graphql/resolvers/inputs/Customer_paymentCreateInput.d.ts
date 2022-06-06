import { CustomersCreateNestedOneWithoutCustomer_paymentInput } from "../inputs/CustomersCreateNestedOneWithoutCustomer_paymentInput";
import { TransactionsCreateNestedManyWithoutCustomer_paymentInput } from "../inputs/TransactionsCreateNestedManyWithoutCustomer_paymentInput";
export declare class Customer_paymentCreateInput {
    id?: bigint | undefined;
    created_at?: Date | undefined;
    payment_info?: string | undefined;
    provider?: string | undefined;
    account_no?: bigint | undefined;
    expiry?: bigint | undefined;
    customers?: CustomersCreateNestedOneWithoutCustomer_paymentInput | undefined;
    transactions?: TransactionsCreateNestedManyWithoutCustomer_paymentInput | undefined;
}
