export declare class Transactions {
    id: number;
    order_id: number;
    transaction_id: number;
    parent_transaction_id: number;
    created?: Date | null;
    payment_method: bigint;
    closed?: string | null;
    customer_payment?: string | null;
    orders?: string | null;
}
