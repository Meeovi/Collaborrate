import { ProjectsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ProjectsOrderByWithRelationAndSearchRelevanceInput";
import { ProjectsWhereInput } from "../../../inputs/ProjectsWhereInput";
import { ProjectsWhereUniqueInput } from "../../../inputs/ProjectsWhereUniqueInput";
export declare class FindManyProjectsArgs {
    where?: ProjectsWhereInput | undefined;
    orderBy?: ProjectsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ProjectsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "project_manager" | "start_date" | "end_date" | "resource" | "considerworkingdays" | "project_template" | "status" | "created_at" | "assignee" | "cust_id" | "doing" | "done" | "goal_collaborators" | "goal_measurement" | "goal_name" | "goal_privacy" | "goal_progress_source" | "goal_timeperiod" | "goal_updatemethod" | "priority" | "section_rule" | "staff_id" | "task_id" | "ticket_id" | "customers" | "tasks" | "ticketing" | "users" | "workspaces" | "tags" | "product" | "websites" | "method" | "zone" | "type" | "team" | "categories" | "company" | "file"> | undefined;
}
