import { ProjectsOrderByWithAggregationInput } from "../../../inputs/ProjectsOrderByWithAggregationInput";
import { ProjectsScalarWhereWithAggregatesInput } from "../../../inputs/ProjectsScalarWhereWithAggregatesInput";
import { ProjectsWhereInput } from "../../../inputs/ProjectsWhereInput";
export declare class GroupByProjectsArgs {
    where?: ProjectsWhereInput | undefined;
    orderBy?: ProjectsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "project_manager" | "start_date" | "end_date" | "resource" | "considerworkingdays" | "project_template" | "status" | "created_at">;
    having?: ProjectsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
