import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class PluginsScalarWhereWithAggregatesInput {
    AND?: PluginsScalarWhereWithAggregatesInput[] | undefined;
    OR?: PluginsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PluginsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    url?: StringNullableWithAggregatesFilter | undefined;
    github_link?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    logo?: StringNullableWithAggregatesFilter | undefined;
    screenshots?: StringNullableWithAggregatesFilter | undefined;
    last_updated?: DateTimeNullableWithAggregatesFilter | undefined;
    publisher_name?: StringNullableWithAggregatesFilter | undefined;
    agree_terms?: BoolNullableWithAggregatesFilter | undefined;
    publisher_email?: StringNullableWithAggregatesFilter | undefined;
}
