import { Customer_paymentCreateNestedOneWithoutTransactionsInput } from "../inputs/Customer_paymentCreateNestedOneWithoutTransactionsInput";
import { OrdersCreateNestedOneWithoutTransactionsInput } from "../inputs/OrdersCreateNestedOneWithoutTransactionsInput";
export declare class TransactionsCreateInput {
    transaction_id?: number | undefined;
    parent_transaction_id?: number | undefined;
    created?: Date | undefined;
    closed?: string | undefined;
    orders?: OrdersCreateNestedOneWithoutTransactionsInput | undefined;
    customer_payment?: Customer_paymentCreateNestedOneWithoutTransactionsInput | undefined;
}
