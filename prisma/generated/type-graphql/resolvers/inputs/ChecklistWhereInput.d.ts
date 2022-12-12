import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ChecklistWhereInput {
    AND?: ChecklistWhereInput[] | undefined;
    OR?: ChecklistWhereInput[] | undefined;
    NOT?: ChecklistWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    username?: StringNullableFilter | undefined;
    location?: StringNullableFilter | undefined;
    regional_manager?: StringNullableFilter | undefined;
    manager?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    ticket?: StringNullableFilter | undefined;
    project?: StringNullableFilter | undefined;
    region?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    media?: StringNullableFilter | undefined;
    prod_id?: StringNullableFilter | undefined;
    trainings?: StringNullableFilter | undefined;
    task?: StringNullableFilter | undefined;
    type?: StringNullableFilter | undefined;
}
