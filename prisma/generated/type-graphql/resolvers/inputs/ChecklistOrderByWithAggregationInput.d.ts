import { ChecklistAvgOrderByAggregateInput } from "../inputs/ChecklistAvgOrderByAggregateInput";
import { ChecklistCountOrderByAggregateInput } from "../inputs/ChecklistCountOrderByAggregateInput";
import { ChecklistMaxOrderByAggregateInput } from "../inputs/ChecklistMaxOrderByAggregateInput";
import { ChecklistMinOrderByAggregateInput } from "../inputs/ChecklistMinOrderByAggregateInput";
import { ChecklistSumOrderByAggregateInput } from "../inputs/ChecklistSumOrderByAggregateInput";
export declare class ChecklistOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    location?: "asc" | "desc" | undefined;
    regional_manager?: "asc" | "desc" | undefined;
    manager?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    ticket?: "asc" | "desc" | undefined;
    project?: "asc" | "desc" | undefined;
    region?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    media?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    trainings?: "asc" | "desc" | undefined;
    task?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    _count?: ChecklistCountOrderByAggregateInput | undefined;
    _avg?: ChecklistAvgOrderByAggregateInput | undefined;
    _max?: ChecklistMaxOrderByAggregateInput | undefined;
    _min?: ChecklistMinOrderByAggregateInput | undefined;
    _sum?: ChecklistSumOrderByAggregateInput | undefined;
}
