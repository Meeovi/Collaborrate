import { CollectionsWhereInput } from "../inputs/CollectionsWhereInput";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CollectionsWhereUniqueInput {
    id?: bigint | undefined;
    AND?: CollectionsWhereInput[] | undefined;
    OR?: CollectionsWhereInput[] | undefined;
    NOT?: CollectionsWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    product?: StringNullableFilter | undefined;
    meta_title?: StringNullableFilter | undefined;
    meta_keywords?: StringNullableFilter | undefined;
    meta_description?: StringNullableFilter | undefined;
}
