import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class ArticlesScalarWhereWithAggregatesInput {
    AND?: ArticlesScalarWhereWithAggregatesInput[] | undefined;
    OR?: ArticlesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ArticlesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    excerpt?: StringNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    categories?: StringNullableWithAggregatesFilter | undefined;
    customers?: StringNullableWithAggregatesFilter | undefined;
    users?: StringNullableWithAggregatesFilter | undefined;
    published?: StringNullableWithAggregatesFilter | undefined;
    cust_id?: StringNullableWithAggregatesFilter | undefined;
    isPublic?: StringNullableWithAggregatesFilter | undefined;
    meta_description?: StringNullableWithAggregatesFilter | undefined;
    meta_name?: StringNullableWithAggregatesFilter | undefined;
    meta_url?: StringNullableWithAggregatesFilter | undefined;
    tags?: StringNullableWithAggregatesFilter | undefined;
    type?: StringNullableWithAggregatesFilter | undefined;
}
