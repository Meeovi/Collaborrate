import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class TasksWhereInput {
    AND?: TasksWhereInput[] | undefined;
    OR?: TasksWhereInput[] | undefined;
    NOT?: TasksWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    subject?: StringNullableFilter | undefined;
    start_date?: StringNullableFilter | undefined;
    due_date?: StringNullableFilter | undefined;
    priority?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    status?: StringNullableFilter | undefined;
    related_to?: StringNullableFilter | undefined;
    contact?: StringNullableFilter | undefined;
    assigned_to?: StringNullableFilter | undefined;
    date_modified?: DateTimeNullableFilter | undefined;
}
