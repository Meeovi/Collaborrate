import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class ZonesScalarWhereWithAggregatesInput {
    AND?: ZonesScalarWhereWithAggregatesInput[] | undefined;
    OR?: ZonesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ZonesScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
    scope?: StringNullableWithAggregatesFilter | undefined;
    type?: StringNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    code?: StringNullableWithAggregatesFilter | undefined;
}
