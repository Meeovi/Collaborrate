import { ProductsOrderByWithRelationInput } from "../inputs/ProductsOrderByWithRelationInput";
export declare class Tax_ruleOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    tax_rate?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    products?: ProductsOrderByWithRelationInput | undefined;
}
