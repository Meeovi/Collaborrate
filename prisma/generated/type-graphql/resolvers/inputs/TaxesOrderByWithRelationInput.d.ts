import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class TaxesOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    tax_identifier?: "asc" | "desc" | undefined;
    postcode?: SortOrderInput | undefined;
    state?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
    rate_percent?: SortOrderInput | undefined;
    taxDefault?: SortOrderInput | undefined;
    products?: SortOrderInput | undefined;
    taxRuleName?: SortOrderInput | undefined;
    taxCategory?: SortOrderInput | undefined;
}
