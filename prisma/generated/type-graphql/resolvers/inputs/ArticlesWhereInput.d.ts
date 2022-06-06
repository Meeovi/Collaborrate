import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ArticlesWhereInput {
    AND?: ArticlesWhereInput[] | undefined;
    OR?: ArticlesWhereInput[] | undefined;
    NOT?: ArticlesWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    excerpt?: StringFilter | undefined;
    content?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    categories?: StringNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
    users?: StringNullableFilter | undefined;
    published?: DateTimeNullableFilter | undefined;
    cust_id?: IntFilter | undefined;
}
