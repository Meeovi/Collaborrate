import { BigIntNullableWithAggregatesFilter } from "../inputs/BigIntNullableWithAggregatesFilter";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class ManufacturerScalarWhereWithAggregatesInput {
    AND?: ManufacturerScalarWhereWithAggregatesInput[] | undefined;
    OR?: ManufacturerScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ManufacturerScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    code?: StringNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    state?: StringNullableWithAggregatesFilter | undefined;
    isPublic?: StringNullableWithAggregatesFilter | undefined;
    city?: StringNullableWithAggregatesFilter | undefined;
    product?: BigIntNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    media?: StringNullableWithAggregatesFilter | undefined;
    products?: StringNullableWithAggregatesFilter | undefined;
}
