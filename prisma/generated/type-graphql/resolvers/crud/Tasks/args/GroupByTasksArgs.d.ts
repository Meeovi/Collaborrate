import { TasksOrderByWithAggregationInput } from "../../../inputs/TasksOrderByWithAggregationInput";
import { TasksScalarWhereWithAggregatesInput } from "../../../inputs/TasksScalarWhereWithAggregatesInput";
import { TasksWhereInput } from "../../../inputs/TasksWhereInput";
export declare class GroupByTasksArgs {
    where?: TasksWhereInput | undefined;
    orderBy?: TasksOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "subject" | "start_date" | "due_date" | "priority" | "description" | "status" | "related_to" | "contact" | "assigned_to" | "date_modified">;
    having?: TasksScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
