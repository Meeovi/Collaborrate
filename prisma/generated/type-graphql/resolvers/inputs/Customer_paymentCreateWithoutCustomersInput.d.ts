import { TransactionsCreateNestedManyWithoutCustomer_paymentInput } from "../inputs/TransactionsCreateNestedManyWithoutCustomer_paymentInput";
export declare class Customer_paymentCreateWithoutCustomersInput {
    id?: bigint | undefined;
    created_at?: Date | undefined;
    payment_info?: string | undefined;
    provider?: string | undefined;
    account_no?: bigint | undefined;
    expiry?: bigint | undefined;
    transactions?: TransactionsCreateNestedManyWithoutCustomer_paymentInput | undefined;
}
