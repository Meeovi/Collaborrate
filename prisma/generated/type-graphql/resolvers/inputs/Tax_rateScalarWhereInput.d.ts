import { BigIntFilter } from "../inputs/BigIntFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Tax_rateScalarWhereInput {
    AND?: Tax_rateScalarWhereInput[] | undefined;
    OR?: Tax_rateScalarWhereInput[] | undefined;
    NOT?: Tax_rateScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    tax_identifier?: StringFilter | undefined;
    zip_post_is_range?: BoolNullableFilter | undefined;
    postcode?: StringNullableFilter | undefined;
    state?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    rate_percent?: StringNullableFilter | undefined;
    default_store_view?: StringNullableFilter | undefined;
    prod_id?: BigIntFilter | undefined;
}
