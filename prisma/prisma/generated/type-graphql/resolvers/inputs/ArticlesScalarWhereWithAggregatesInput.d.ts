import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ArticlesScalarWhereWithAggregatesInput {
    AND?: ArticlesScalarWhereWithAggregatesInput[] | undefined;
    OR?: ArticlesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ArticlesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    excerpt?: StringWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    categories?: StringNullableWithAggregatesFilter | undefined;
    customers?: StringNullableWithAggregatesFilter | undefined;
    users?: StringNullableWithAggregatesFilter | undefined;
    published?: DateTimeNullableWithAggregatesFilter | undefined;
    cust_id?: IntWithAggregatesFilter | undefined;
}
