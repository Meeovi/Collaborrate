import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TagsWhereInput } from "../inputs/TagsWhereInput";
export declare class TagsWhereUniqueInput {
    id?: number | undefined;
    AND?: TagsWhereInput[] | undefined;
    OR?: TagsWhereInput[] | undefined;
    NOT?: TagsWhereInput[] | undefined;
    name?: StringFilter | undefined;
    excerpt?: StringNullableFilter | undefined;
    categories?: StringNullableFilter | undefined;
    articles?: StringNullableFilter | undefined;
    products?: StringNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
    users?: StringNullableFilter | undefined;
}
