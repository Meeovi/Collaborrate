import { Customer_paymentCreateNestedOneWithoutTransactionsInput } from "../inputs/Customer_paymentCreateNestedOneWithoutTransactionsInput";
export declare class TransactionsCreateWithoutOrdersInput {
    transaction_id?: number | undefined;
    parent_transaction_id?: number | undefined;
    created?: Date | undefined;
    closed?: string | undefined;
    customer_payment?: Customer_paymentCreateNestedOneWithoutTransactionsInput | undefined;
}
