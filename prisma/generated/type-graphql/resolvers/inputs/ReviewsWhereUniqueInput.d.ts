import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { ReviewsWhereInput } from "../inputs/ReviewsWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ReviewsWhereUniqueInput {
    id?: number | undefined;
    AND?: ReviewsWhereInput[] | undefined;
    OR?: ReviewsWhereInput[] | undefined;
    NOT?: ReviewsWhereInput[] | undefined;
    first_name?: StringNullableFilter | undefined;
    last_name?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    websites?: StringNullableFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
}
