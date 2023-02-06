import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CategoriesScalarWhereWithAggregatesInput {
    AND?: CategoriesScalarWhereWithAggregatesInput[] | undefined;
    OR?: CategoriesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CategoriesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    thumbnail?: StringNullableWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    visibility?: StringNullableWithAggregatesFilter | undefined;
    status?: BoolNullableWithAggregatesFilter | undefined;
    websites?: StringNullableWithAggregatesFilter | undefined;
    product?: StringNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    meta_title?: StringNullableWithAggregatesFilter | undefined;
    meta_keywords?: StringNullableWithAggregatesFilter | undefined;
    meta_description?: StringNullableWithAggregatesFilter | undefined;
    meta_url?: StringNullableWithAggregatesFilter | undefined;
    workspaces?: StringNullableWithAggregatesFilter | undefined;
}
