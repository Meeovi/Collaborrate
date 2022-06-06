import { TasksAvgOrderByAggregateInput } from "../inputs/TasksAvgOrderByAggregateInput";
import { TasksCountOrderByAggregateInput } from "../inputs/TasksCountOrderByAggregateInput";
import { TasksMaxOrderByAggregateInput } from "../inputs/TasksMaxOrderByAggregateInput";
import { TasksMinOrderByAggregateInput } from "../inputs/TasksMinOrderByAggregateInput";
import { TasksSumOrderByAggregateInput } from "../inputs/TasksSumOrderByAggregateInput";
export declare class TasksOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    subject?: "asc" | "desc" | undefined;
    start_date?: "asc" | "desc" | undefined;
    due_date?: "asc" | "desc" | undefined;
    priority?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    related_to?: "asc" | "desc" | undefined;
    contact?: "asc" | "desc" | undefined;
    assigned_to?: "asc" | "desc" | undefined;
    date_modified?: "asc" | "desc" | undefined;
    _count?: TasksCountOrderByAggregateInput | undefined;
    _avg?: TasksAvgOrderByAggregateInput | undefined;
    _max?: TasksMaxOrderByAggregateInput | undefined;
    _min?: TasksMinOrderByAggregateInput | undefined;
    _sum?: TasksSumOrderByAggregateInput | undefined;
}
