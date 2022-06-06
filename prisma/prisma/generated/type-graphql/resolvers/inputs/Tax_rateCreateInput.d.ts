import { ProductsCreateNestedOneWithoutTax_rateInput } from "../inputs/ProductsCreateNestedOneWithoutTax_rateInput";
export declare class Tax_rateCreateInput {
    tax_identifier: string;
    zip_post_is_range?: boolean | undefined;
    postcode?: string | undefined;
    state?: string | undefined;
    country?: string | undefined;
    rate_percent?: string | undefined;
    default_store_view?: string | undefined;
    products?: ProductsCreateNestedOneWithoutTax_rateInput | undefined;
}
