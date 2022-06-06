import { ProjectsAvgOrderByAggregateInput } from "../inputs/ProjectsAvgOrderByAggregateInput";
import { ProjectsCountOrderByAggregateInput } from "../inputs/ProjectsCountOrderByAggregateInput";
import { ProjectsMaxOrderByAggregateInput } from "../inputs/ProjectsMaxOrderByAggregateInput";
import { ProjectsMinOrderByAggregateInput } from "../inputs/ProjectsMinOrderByAggregateInput";
import { ProjectsSumOrderByAggregateInput } from "../inputs/ProjectsSumOrderByAggregateInput";
export declare class ProjectsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    project_manager?: "asc" | "desc" | undefined;
    start_date?: "asc" | "desc" | undefined;
    end_date?: "asc" | "desc" | undefined;
    resource?: "asc" | "desc" | undefined;
    considerworkingdays?: "asc" | "desc" | undefined;
    project_template?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    _count?: ProjectsCountOrderByAggregateInput | undefined;
    _avg?: ProjectsAvgOrderByAggregateInput | undefined;
    _max?: ProjectsMaxOrderByAggregateInput | undefined;
    _min?: ProjectsMinOrderByAggregateInput | undefined;
    _sum?: ProjectsSumOrderByAggregateInput | undefined;
}
