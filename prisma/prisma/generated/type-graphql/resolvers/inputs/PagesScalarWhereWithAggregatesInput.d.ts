import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class PagesScalarWhereWithAggregatesInput {
    AND?: PagesScalarWhereWithAggregatesInput[] | undefined;
    OR?: PagesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PagesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    enable_page?: BoolNullableWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    content_title?: StringNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    url_key?: StringNullableWithAggregatesFilter | undefined;
    meta_title?: StringNullableWithAggregatesFilter | undefined;
    meta_keywords?: StringNullableWithAggregatesFilter | undefined;
    meta_description?: StringNullableWithAggregatesFilter | undefined;
}
