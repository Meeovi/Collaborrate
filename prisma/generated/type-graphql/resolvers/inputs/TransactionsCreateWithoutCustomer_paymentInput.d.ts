import { OrdersCreateNestedOneWithoutTransactionsInput } from "../inputs/OrdersCreateNestedOneWithoutTransactionsInput";
export declare class TransactionsCreateWithoutCustomer_paymentInput {
    transaction_id?: number | undefined;
    parent_transaction_id?: number | undefined;
    created?: Date | undefined;
    closed?: string | undefined;
    orders?: OrdersCreateNestedOneWithoutTransactionsInput | undefined;
}
