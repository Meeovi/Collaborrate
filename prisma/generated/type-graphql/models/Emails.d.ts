import { Customers } from "../models/Customers";
export declare class Emails {
    id: number;
    title?: Date | null;
    created_at?: Date | null;
    subject?: string | null;
    content?: string | null;
    recipients?: string | null;
    cust_id: number;
    customers?: Customers;
}
