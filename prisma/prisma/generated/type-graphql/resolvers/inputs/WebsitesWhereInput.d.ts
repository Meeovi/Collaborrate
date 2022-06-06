import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { ThemesListRelationFilter } from "../inputs/ThemesListRelationFilter";
export declare class WebsitesWhereInput {
    AND?: WebsitesWhereInput[] | undefined;
    OR?: WebsitesWhereInput[] | undefined;
    NOT?: WebsitesWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    url?: StringNullableFilter | undefined;
    shop?: StringNullableFilter | undefined;
    store?: StringNullableFilter | undefined;
    themes?: ThemesListRelationFilter | undefined;
}
