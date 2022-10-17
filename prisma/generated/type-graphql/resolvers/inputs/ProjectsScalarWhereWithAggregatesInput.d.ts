import { BigIntNullableWithAggregatesFilter } from "../inputs/BigIntNullableWithAggregatesFilter";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class ProjectsScalarWhereWithAggregatesInput {
    AND?: ProjectsScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProjectsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProjectsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    project_manager?: StringNullableWithAggregatesFilter | undefined;
    start_date?: StringNullableWithAggregatesFilter | undefined;
    end_date?: StringNullableWithAggregatesFilter | undefined;
    resource?: StringNullableWithAggregatesFilter | undefined;
    considerworkingdays?: StringNullableWithAggregatesFilter | undefined;
    project_template?: StringNullableWithAggregatesFilter | undefined;
    status?: StringNullableWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    assignee?: StringNullableWithAggregatesFilter | undefined;
    cust_id?: IntNullableWithAggregatesFilter | undefined;
    doing?: StringNullableWithAggregatesFilter | undefined;
    done?: StringNullableWithAggregatesFilter | undefined;
    goal_collaborators?: StringNullableWithAggregatesFilter | undefined;
    goal_measurement?: StringNullableWithAggregatesFilter | undefined;
    goal_name?: StringNullableWithAggregatesFilter | undefined;
    goal_privacy?: StringNullableWithAggregatesFilter | undefined;
    goal_progress_source?: StringNullableWithAggregatesFilter | undefined;
    goal_timeperiod?: StringNullableWithAggregatesFilter | undefined;
    goal_updatemethod?: StringNullableWithAggregatesFilter | undefined;
    priority?: StringNullableWithAggregatesFilter | undefined;
    section_rule?: StringNullableWithAggregatesFilter | undefined;
    staff_id?: IntNullableWithAggregatesFilter | undefined;
    task_id?: BigIntNullableWithAggregatesFilter | undefined;
    ticket_id?: BigIntNullableWithAggregatesFilter | undefined;
    customers?: StringNullableWithAggregatesFilter | undefined;
    tasks?: StringNullableWithAggregatesFilter | undefined;
    ticketing?: StringNullableWithAggregatesFilter | undefined;
    users?: StringNullableWithAggregatesFilter | undefined;
    workspaces?: StringNullableWithAggregatesFilter | undefined;
    tags?: StringNullableWithAggregatesFilter | undefined;
    product?: StringNullableWithAggregatesFilter | undefined;
    websites?: StringNullableWithAggregatesFilter | undefined;
    method?: StringNullableWithAggregatesFilter | undefined;
    zone?: StringNullableWithAggregatesFilter | undefined;
    type?: StringNullableWithAggregatesFilter | undefined;
    team?: StringNullableWithAggregatesFilter | undefined;
    categories?: StringNullableWithAggregatesFilter | undefined;
    company?: StringNullableWithAggregatesFilter | undefined;
    file?: StringNullableWithAggregatesFilter | undefined;
}
