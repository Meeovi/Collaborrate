import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { CategoriesWhereInput } from "../inputs/CategoriesWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CategoriesWhereUniqueInput {
    id?: number | undefined;
    AND?: CategoriesWhereInput[] | undefined;
    OR?: CategoriesWhereInput[] | undefined;
    NOT?: CategoriesWhereInput[] | undefined;
    thumbnail?: StringNullableFilter | undefined;
    name?: StringFilter | undefined;
    visibility?: StringNullableFilter | undefined;
    status?: BoolNullableFilter | undefined;
    websites?: StringNullableFilter | undefined;
    product?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    meta_title?: StringNullableFilter | undefined;
    meta_keywords?: StringNullableFilter | undefined;
    meta_description?: StringNullableFilter | undefined;
    meta_url?: StringNullableFilter | undefined;
    workspaces?: StringNullableFilter | undefined;
}
