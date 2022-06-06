import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DecimalNullableWithAggregatesFilter } from "../inputs/DecimalNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class RatingScalarWhereWithAggregatesInput {
    AND?: RatingScalarWhereWithAggregatesInput[] | undefined;
    OR?: RatingScalarWhereWithAggregatesInput[] | undefined;
    NOT?: RatingScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    default_value?: StringNullableWithAggregatesFilter | undefined;
    default_store_view?: StringNullableWithAggregatesFilter | undefined;
    rating_visibility?: StringNullableWithAggregatesFilter | undefined;
    active?: BoolNullableWithAggregatesFilter | undefined;
    sort_order?: DecimalNullableWithAggregatesFilter | undefined;
    prod_id?: BigIntWithAggregatesFilter | undefined;
}
