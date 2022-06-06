import { ProductsCreateNestedOneWithoutTax_ruleInput } from "../inputs/ProductsCreateNestedOneWithoutTax_ruleInput";
export declare class Tax_ruleCreateInput {
    name: string;
    tax_rate?: string | undefined;
    products?: ProductsCreateNestedOneWithoutTax_ruleInput | undefined;
}
