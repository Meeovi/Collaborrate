import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class InternalizationScalarWhereWithAggregatesInput {
    AND?: InternalizationScalarWhereWithAggregatesInput[] | undefined;
    OR?: InternalizationScalarWhereWithAggregatesInput[] | undefined;
    NOT?: InternalizationScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    region?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    default?: StringNullableWithAggregatesFilter | undefined;
    website?: StringNullableWithAggregatesFilter | undefined;
}
