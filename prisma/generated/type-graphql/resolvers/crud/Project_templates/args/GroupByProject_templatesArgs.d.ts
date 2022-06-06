import { Project_templatesOrderByWithAggregationInput } from "../../../inputs/Project_templatesOrderByWithAggregationInput";
import { Project_templatesScalarWhereWithAggregatesInput } from "../../../inputs/Project_templatesScalarWhereWithAggregatesInput";
import { Project_templatesWhereInput } from "../../../inputs/Project_templatesWhereInput";
export declare class GroupByProject_templatesArgs {
    where?: Project_templatesWhereInput | undefined;
    orderBy?: Project_templatesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "status" | "consider_working_days" | "priority" | "project_manager" | "resource" | "content">;
    having?: Project_templatesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
