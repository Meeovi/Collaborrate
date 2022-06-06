import { Customer_payment } from "../../../models/Customer_payment";
import { Orders } from "../../../models/Orders";
import { Transactions } from "../../../models/Transactions";
export declare class TransactionsRelationsResolver {
    orders(transactions: Transactions, ctx: any): Promise<Orders>;
    customer_payment(transactions: Transactions, ctx: any): Promise<Customer_payment>;
}
