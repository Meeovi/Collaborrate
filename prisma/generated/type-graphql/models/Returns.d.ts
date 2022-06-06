import { Customers } from "../models/Customers";
import { Products } from "../models/Products";
export declare class Returns {
    id: bigint;
    created_at?: Date | null;
    name?: string | null;
    validity?: string | null;
    return_prefix?: string | null;
    prod_id: bigint;
    cust_id: number;
    customers?: Customers;
    products?: Products;
}
