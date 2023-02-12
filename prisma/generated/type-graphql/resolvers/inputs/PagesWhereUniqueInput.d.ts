import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { PagesWhereInput } from "../inputs/PagesWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PagesWhereUniqueInput {
    id?: number | undefined;
    AND?: PagesWhereInput[] | undefined;
    OR?: PagesWhereInput[] | undefined;
    NOT?: PagesWhereInput[] | undefined;
    enable_page?: BoolNullableFilter | undefined;
    title?: StringFilter | undefined;
    content_title?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    url_key?: StringNullableFilter | undefined;
    meta_title?: StringNullableFilter | undefined;
    meta_keywords?: StringNullableFilter | undefined;
    meta_description?: StringNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
}
