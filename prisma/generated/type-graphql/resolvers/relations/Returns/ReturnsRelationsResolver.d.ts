import { Customers } from "../../../models/Customers";
import { Products } from "../../../models/Products";
import { Returns } from "../../../models/Returns";
export declare class ReturnsRelationsResolver {
    customers(returns: Returns, ctx: any): Promise<Customers>;
    products(returns: Returns, ctx: any): Promise<Products>;
}
