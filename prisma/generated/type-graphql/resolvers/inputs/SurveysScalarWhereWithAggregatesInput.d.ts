import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class SurveysScalarWhereWithAggregatesInput {
    AND?: SurveysScalarWhereWithAggregatesInput[] | undefined;
    OR?: SurveysScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SurveysScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    assigned_to?: StringNullableWithAggregatesFilter | undefined;
    status?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    question?: StringNullableWithAggregatesFilter | undefined;
    answer?: StringNullableWithAggregatesFilter | undefined;
    submit_text?: StringNullableWithAggregatesFilter | undefined;
    satisfied_text?: StringNullableWithAggregatesFilter | undefined;
    neither_text?: StringNullableWithAggregatesFilter | undefined;
    dissatisfied_text?: StringNullableWithAggregatesFilter | undefined;
}
