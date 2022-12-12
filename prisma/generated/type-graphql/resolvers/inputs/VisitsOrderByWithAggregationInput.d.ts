import { VisitsAvgOrderByAggregateInput } from "../inputs/VisitsAvgOrderByAggregateInput";
import { VisitsCountOrderByAggregateInput } from "../inputs/VisitsCountOrderByAggregateInput";
import { VisitsMaxOrderByAggregateInput } from "../inputs/VisitsMaxOrderByAggregateInput";
import { VisitsMinOrderByAggregateInput } from "../inputs/VisitsMinOrderByAggregateInput";
import { VisitsSumOrderByAggregateInput } from "../inputs/VisitsSumOrderByAggregateInput";
export declare class VisitsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    location?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    reason?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    emergency?: "asc" | "desc" | undefined;
    start_date?: "asc" | "desc" | undefined;
    end_date?: "asc" | "desc" | undefined;
    task?: "asc" | "desc" | undefined;
    meeting?: "asc" | "desc" | undefined;
    _count?: VisitsCountOrderByAggregateInput | undefined;
    _avg?: VisitsAvgOrderByAggregateInput | undefined;
    _max?: VisitsMaxOrderByAggregateInput | undefined;
    _min?: VisitsMinOrderByAggregateInput | undefined;
    _sum?: VisitsSumOrderByAggregateInput | undefined;
}
