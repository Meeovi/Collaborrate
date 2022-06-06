import { Customers } from "../../../models/Customers";
import { Orders } from "../../../models/Orders";
import { Products } from "../../../models/Products";
import { Quotes } from "../../../models/Quotes";
export declare class QuotesRelationsResolver {
    customers_customersToquotes(quotes: Quotes, ctx: any): Promise<Customers>;
    orders(quotes: Quotes, ctx: any): Promise<Orders>;
    products_productsToquotes(quotes: Quotes, ctx: any): Promise<Products>;
}
