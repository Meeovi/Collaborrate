import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaxesWhereInput } from "../inputs/TaxesWhereInput";
export declare class TaxesWhereUniqueInput {
    id?: number | undefined;
    AND?: TaxesWhereInput[] | undefined;
    OR?: TaxesWhereInput[] | undefined;
    NOT?: TaxesWhereInput[] | undefined;
    tax_identifier?: StringFilter | undefined;
    postcode?: StringNullableFilter | undefined;
    state?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    rate_percent?: StringNullableFilter | undefined;
    taxDefault?: StringNullableFilter | undefined;
    products?: StringNullableFilter | undefined;
    taxRuleName?: StringNullableFilter | undefined;
    taxCategory?: StringNullableFilter | undefined;
}
