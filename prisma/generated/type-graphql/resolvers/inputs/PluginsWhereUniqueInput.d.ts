import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { PluginsWhereInput } from "../inputs/PluginsWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PluginsWhereUniqueInput {
    id?: bigint | undefined;
    AND?: PluginsWhereInput[] | undefined;
    OR?: PluginsWhereInput[] | undefined;
    NOT?: PluginsWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    url?: StringNullableFilter | undefined;
    github_link?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    logo?: StringNullableFilter | undefined;
    screenshots?: StringNullableFilter | undefined;
    last_updated?: DateTimeNullableFilter | undefined;
    publisher_name?: StringNullableFilter | undefined;
    agree_terms?: BoolNullableFilter | undefined;
    publisher_email?: StringNullableFilter | undefined;
}
