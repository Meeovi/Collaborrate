import { BigIntFilter } from "../inputs/BigIntFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Tax_rateWhereInput {
    AND?: Tax_rateWhereInput[] | undefined;
    OR?: Tax_rateWhereInput[] | undefined;
    NOT?: Tax_rateWhereInput[] | undefined;
    id?: IntFilter | undefined;
    tax_identifier?: StringFilter | undefined;
    zip_post_is_range?: BoolNullableFilter | undefined;
    postcode?: StringNullableFilter | undefined;
    state?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    rate_percent?: StringNullableFilter | undefined;
    default_store_view?: StringNullableFilter | undefined;
    prod_id?: BigIntFilter | undefined;
    products?: StringNullableFilter | undefined;
}
