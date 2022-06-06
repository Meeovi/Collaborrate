import { Customer_group } from "../../../models/Customer_group";
import { Customers } from "../../../models/Customers";
export declare class Customer_groupRelationsResolver {
    customers(customer_group: Customer_group, ctx: any): Promise<Customers>;
}
