import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class CollectionsScalarWhereWithAggregatesInput {
    AND?: CollectionsScalarWhereWithAggregatesInput[] | undefined;
    OR?: CollectionsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CollectionsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    product?: StringNullableWithAggregatesFilter | undefined;
    meta_title?: StringNullableWithAggregatesFilter | undefined;
    meta_keywords?: StringNullableWithAggregatesFilter | undefined;
    meta_description?: StringNullableWithAggregatesFilter | undefined;
}
