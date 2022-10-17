import { BigIntFilter } from "../inputs/BigIntFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DecimalNullableFilter } from "../inputs/DecimalNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class RatingWhereInput {
    AND?: RatingWhereInput[] | undefined;
    OR?: RatingWhereInput[] | undefined;
    NOT?: RatingWhereInput[] | undefined;
    id?: IntFilter | undefined;
    default_value?: StringNullableFilter | undefined;
    default_store_view?: StringNullableFilter | undefined;
    rating_visibility?: StringNullableFilter | undefined;
    active?: BoolNullableFilter | undefined;
    sort_order?: DecimalNullableFilter | undefined;
    prod_id?: BigIntFilter | undefined;
    products?: StringNullableFilter | undefined;
}
