import { Customers } from "../models/Customers";
import { Transactions } from "../models/Transactions";
import { Customer_paymentCount } from "../resolvers/outputs/Customer_paymentCount";
export declare class Customer_payment {
    id: bigint;
    created_at?: Date | null;
    cust_id: number;
    payment_info?: string | null;
    provider?: string | null;
    account_no: bigint;
    expiry?: bigint | null;
    customers?: Customers;
    transactions?: Transactions[];
    _count?: Customer_paymentCount | null;
}
