import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ReviewsWhereInput {
    AND?: ReviewsWhereInput[] | undefined;
    OR?: ReviewsWhereInput[] | undefined;
    NOT?: ReviewsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    first_name?: StringNullableFilter | undefined;
    last_name?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    websites?: StringNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
}
