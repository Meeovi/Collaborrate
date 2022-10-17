import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class Tax_rateScalarWhereWithAggregatesInput {
    AND?: Tax_rateScalarWhereWithAggregatesInput[] | undefined;
    OR?: Tax_rateScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Tax_rateScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    tax_identifier?: StringWithAggregatesFilter | undefined;
    zip_post_is_range?: BoolNullableWithAggregatesFilter | undefined;
    postcode?: StringNullableWithAggregatesFilter | undefined;
    state?: StringNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    rate_percent?: StringNullableWithAggregatesFilter | undefined;
    default_store_view?: StringNullableWithAggregatesFilter | undefined;
    prod_id?: BigIntWithAggregatesFilter | undefined;
    products?: StringNullableWithAggregatesFilter | undefined;
}
