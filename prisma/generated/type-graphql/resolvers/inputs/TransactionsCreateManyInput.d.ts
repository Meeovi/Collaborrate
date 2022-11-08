export declare class TransactionsCreateManyInput {
    id?: number | undefined;
    order_id: number;
    transaction_id: number;
    parent_transaction_id: number;
    created?: Date | undefined;
    payment_method: bigint;
    closed?: string | undefined;
    customer_payment?: string | undefined;
    orders?: string | undefined;
}
