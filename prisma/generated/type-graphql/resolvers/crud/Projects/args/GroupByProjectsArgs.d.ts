import { ProjectsOrderByWithAggregationInput } from "../../../inputs/ProjectsOrderByWithAggregationInput";
import { ProjectsScalarWhereWithAggregatesInput } from "../../../inputs/ProjectsScalarWhereWithAggregatesInput";
import { ProjectsWhereInput } from "../../../inputs/ProjectsWhereInput";
export declare class GroupByProjectsArgs {
    where?: ProjectsWhereInput | undefined;
    orderBy?: ProjectsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "project_manager" | "start_date" | "end_date" | "resource" | "considerworkingdays" | "project_template" | "status" | "created_at" | "assignee" | "cust_id" | "doing" | "done" | "goal_collaborators" | "goal_measurement" | "goal_name" | "goal_privacy" | "goal_progress_source" | "goal_timeperiod" | "goal_updatemethod" | "priority" | "section_rule" | "staff_id" | "task_id" | "ticket_id" | "customers" | "tasks" | "ticketing" | "users" | "workspaces" | "tags" | "product" | "websites" | "method" | "zone" | "type" | "team" | "categories" | "company" | "file">;
    having?: ProjectsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
