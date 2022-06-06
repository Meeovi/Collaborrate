import { Products } from "../../../models/Products";
import { Tax_rate } from "../../../models/Tax_rate";
export declare class Tax_rateRelationsResolver {
    products(tax_rate: Tax_rate, ctx: any): Promise<Products>;
}
