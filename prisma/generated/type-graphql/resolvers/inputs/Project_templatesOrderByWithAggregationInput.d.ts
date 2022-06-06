import { Project_templatesAvgOrderByAggregateInput } from "../inputs/Project_templatesAvgOrderByAggregateInput";
import { Project_templatesCountOrderByAggregateInput } from "../inputs/Project_templatesCountOrderByAggregateInput";
import { Project_templatesMaxOrderByAggregateInput } from "../inputs/Project_templatesMaxOrderByAggregateInput";
import { Project_templatesMinOrderByAggregateInput } from "../inputs/Project_templatesMinOrderByAggregateInput";
import { Project_templatesSumOrderByAggregateInput } from "../inputs/Project_templatesSumOrderByAggregateInput";
export declare class Project_templatesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    consider_working_days?: "asc" | "desc" | undefined;
    priority?: "asc" | "desc" | undefined;
    project_manager?: "asc" | "desc" | undefined;
    resource?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    _count?: Project_templatesCountOrderByAggregateInput | undefined;
    _avg?: Project_templatesAvgOrderByAggregateInput | undefined;
    _max?: Project_templatesMaxOrderByAggregateInput | undefined;
    _min?: Project_templatesMinOrderByAggregateInput | undefined;
    _sum?: Project_templatesSumOrderByAggregateInput | undefined;
}
