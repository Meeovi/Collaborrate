import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class SurveysWhereInput {
    AND?: SurveysWhereInput[] | undefined;
    OR?: SurveysWhereInput[] | undefined;
    NOT?: SurveysWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    assigned_to?: StringNullableFilter | undefined;
    status?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    question?: StringNullableFilter | undefined;
    answer?: StringNullableFilter | undefined;
    submit_text?: StringNullableFilter | undefined;
    satisfied_text?: StringNullableFilter | undefined;
    neither_text?: StringNullableFilter | undefined;
    dissatisfied_text?: StringNullableFilter | undefined;
}
