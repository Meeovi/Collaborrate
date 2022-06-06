import { Customers } from "../../../models/Customers";
import { Orders } from "../../../models/Orders";
import { Products } from "../../../models/Products";
import { Quotes } from "../../../models/Quotes";
import { Transactions } from "../../../models/Transactions";
import { OrdersQuotesArgs } from "./args/OrdersQuotesArgs";
import { OrdersTransactionsArgs } from "./args/OrdersTransactionsArgs";
export declare class OrdersRelationsResolver {
    customers(orders: Orders, ctx: any): Promise<Customers>;
    products(orders: Orders, ctx: any): Promise<Products>;
    quotes(orders: Orders, ctx: any, args: OrdersQuotesArgs): Promise<Quotes[]>;
    transactions(orders: Orders, ctx: any, args: OrdersTransactionsArgs): Promise<Transactions[]>;
}
