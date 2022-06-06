import { Customers } from "../models/Customers";
export declare class Customer_group {
    id: bigint;
    created_at?: Date | null;
    name?: string | null;
    tax_class?: string | null;
    cust_id: number;
    customers?: Customers;
}
