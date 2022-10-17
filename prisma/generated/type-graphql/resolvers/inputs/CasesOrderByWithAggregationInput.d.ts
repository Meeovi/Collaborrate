import { CasesAvgOrderByAggregateInput } from "../inputs/CasesAvgOrderByAggregateInput";
import { CasesCountOrderByAggregateInput } from "../inputs/CasesCountOrderByAggregateInput";
import { CasesMaxOrderByAggregateInput } from "../inputs/CasesMaxOrderByAggregateInput";
import { CasesMinOrderByAggregateInput } from "../inputs/CasesMinOrderByAggregateInput";
import { CasesSumOrderByAggregateInput } from "../inputs/CasesSumOrderByAggregateInput";
export declare class CasesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    case_number?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    subject?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    resolution?: "asc" | "desc" | undefined;
    priority?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    account_name?: "asc" | "desc" | undefined;
    assigned_to?: "asc" | "desc" | undefined;
    date_modified?: "asc" | "desc" | undefined;
    _count?: CasesCountOrderByAggregateInput | undefined;
    _avg?: CasesAvgOrderByAggregateInput | undefined;
    _max?: CasesMaxOrderByAggregateInput | undefined;
    _min?: CasesMinOrderByAggregateInput | undefined;
    _sum?: CasesSumOrderByAggregateInput | undefined;
}
