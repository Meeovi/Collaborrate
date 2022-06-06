import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class TasksScalarWhereWithAggregatesInput {
    AND?: TasksScalarWhereWithAggregatesInput[] | undefined;
    OR?: TasksScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TasksScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    subject?: StringNullableWithAggregatesFilter | undefined;
    start_date?: StringNullableWithAggregatesFilter | undefined;
    due_date?: StringNullableWithAggregatesFilter | undefined;
    priority?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    status?: StringNullableWithAggregatesFilter | undefined;
    related_to?: StringNullableWithAggregatesFilter | undefined;
    contact?: StringNullableWithAggregatesFilter | undefined;
    assigned_to?: StringNullableWithAggregatesFilter | undefined;
    date_modified?: DateTimeNullableWithAggregatesFilter | undefined;
}
