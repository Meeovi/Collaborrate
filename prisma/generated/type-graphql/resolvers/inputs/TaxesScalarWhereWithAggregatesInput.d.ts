import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TaxesScalarWhereWithAggregatesInput {
    AND?: TaxesScalarWhereWithAggregatesInput[] | undefined;
    OR?: TaxesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TaxesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    tax_identifier?: StringWithAggregatesFilter | undefined;
    postcode?: StringNullableWithAggregatesFilter | undefined;
    state?: StringNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    rate_percent?: StringNullableWithAggregatesFilter | undefined;
    taxDefault?: StringNullableWithAggregatesFilter | undefined;
    products?: StringNullableWithAggregatesFilter | undefined;
    taxRuleName?: StringNullableWithAggregatesFilter | undefined;
    taxCategory?: StringNullableWithAggregatesFilter | undefined;
}
