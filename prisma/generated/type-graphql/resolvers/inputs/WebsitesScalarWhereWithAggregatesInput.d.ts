import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class WebsitesScalarWhereWithAggregatesInput {
    AND?: WebsitesScalarWhereWithAggregatesInput[] | undefined;
    OR?: WebsitesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: WebsitesScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    url?: StringNullableWithAggregatesFilter | undefined;
    shop?: StringNullableWithAggregatesFilter | undefined;
    store?: StringNullableWithAggregatesFilter | undefined;
    category?: StringNullableWithAggregatesFilter | undefined;
    themes?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
}
