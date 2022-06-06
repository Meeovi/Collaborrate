import { CustomersCreateNestedOneWithoutCustomer_paymentInput } from "../inputs/CustomersCreateNestedOneWithoutCustomer_paymentInput";
export declare class Customer_paymentCreateWithoutTransactionsInput {
    id?: bigint | undefined;
    created_at?: Date | undefined;
    payment_info?: string | undefined;
    provider?: string | undefined;
    account_no?: bigint | undefined;
    expiry?: bigint | undefined;
    customers?: CustomersCreateNestedOneWithoutCustomer_paymentInput | undefined;
}
