import { Customer_payment } from "../../../models/Customer_payment";
import { Customers } from "../../../models/Customers";
import { Transactions } from "../../../models/Transactions";
import { Customer_paymentTransactionsArgs } from "./args/Customer_paymentTransactionsArgs";
export declare class Customer_paymentRelationsResolver {
    customers(customer_payment: Customer_payment, ctx: any): Promise<Customers>;
    transactions(customer_payment: Customer_payment, ctx: any, args: Customer_paymentTransactionsArgs): Promise<Transactions[]>;
}
