import { Customer_payment } from "../models/Customer_payment";
import { Orders } from "../models/Orders";
export declare class Transactions {
    id: number;
    order_id: number;
    transaction_id: number;
    parent_transaction_id: number;
    created?: Date | null;
    payment_method: bigint;
    closed?: string | null;
    orders?: Orders;
    customer_payment?: Customer_payment;
}
