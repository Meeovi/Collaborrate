import { SchedulerAvgOrderByAggregateInput } from "../inputs/SchedulerAvgOrderByAggregateInput";
import { SchedulerCountOrderByAggregateInput } from "../inputs/SchedulerCountOrderByAggregateInput";
import { SchedulerMaxOrderByAggregateInput } from "../inputs/SchedulerMaxOrderByAggregateInput";
import { SchedulerMinOrderByAggregateInput } from "../inputs/SchedulerMinOrderByAggregateInput";
import { SchedulerSumOrderByAggregateInput } from "../inputs/SchedulerSumOrderByAggregateInput";
export declare class SchedulerOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    end_date?: "asc" | "desc" | undefined;
    level?: "asc" | "desc" | undefined;
    login?: "asc" | "desc" | undefined;
    notes?: "asc" | "desc" | undefined;
    start_date?: "asc" | "desc" | undefined;
    whid?: "asc" | "desc" | undefined;
    label?: "asc" | "desc" | undefined;
    public?: "asc" | "desc" | undefined;
    permission?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    _count?: SchedulerCountOrderByAggregateInput | undefined;
    _avg?: SchedulerAvgOrderByAggregateInput | undefined;
    _max?: SchedulerMaxOrderByAggregateInput | undefined;
    _min?: SchedulerMinOrderByAggregateInput | undefined;
    _sum?: SchedulerSumOrderByAggregateInput | undefined;
}
