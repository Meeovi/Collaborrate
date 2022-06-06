import { Products } from "../../../models/Products";
import { Tax_rule } from "../../../models/Tax_rule";
export declare class Tax_ruleRelationsResolver {
    products(tax_rule: Tax_rule, ctx: any): Promise<Products>;
}
