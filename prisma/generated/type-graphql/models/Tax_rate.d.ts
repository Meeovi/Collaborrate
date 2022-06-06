import { Products } from "../models/Products";
export declare class Tax_rate {
    id: number;
    tax_identifier: string;
    zip_post_is_range?: boolean | null;
    postcode?: string | null;
    state?: string | null;
    country?: string | null;
    rate_percent?: string | null;
    default_store_view?: string | null;
    prod_id: bigint;
    products?: Products;
}
