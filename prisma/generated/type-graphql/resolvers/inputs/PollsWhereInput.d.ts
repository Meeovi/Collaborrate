import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PollsWhereInput {
    AND?: PollsWhereInput[] | undefined;
    OR?: PollsWhereInput[] | undefined;
    NOT?: PollsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    excerpt?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    published?: DateTimeNullableFilter | undefined;
    question?: StringNullableFilter | undefined;
    response?: StringNullableFilter | undefined;
    categories?: StringNullableFilter | undefined;
    articles?: StringNullableFilter | undefined;
    products?: StringNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
    users?: StringNullableFilter | undefined;
}
