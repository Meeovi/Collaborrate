import { Customers } from "../models/Customers";
export declare class Comments {
    id: number;
    customer_name: string;
    description?: string | null;
    image?: string | null;
    response?: string | null;
    published?: Date | null;
    cust_id: number;
    customers?: Customers;
}
