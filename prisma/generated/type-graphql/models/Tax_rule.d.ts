import { Products } from "../models/Products";
export declare class Tax_rule {
    id: number;
    name: string;
    tax_rate?: string | null;
    prod_id: bigint;
    products?: Products;
}
