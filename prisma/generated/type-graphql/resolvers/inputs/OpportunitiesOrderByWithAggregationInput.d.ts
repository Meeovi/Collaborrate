import { OpportunitiesAvgOrderByAggregateInput } from "../inputs/OpportunitiesAvgOrderByAggregateInput";
import { OpportunitiesCountOrderByAggregateInput } from "../inputs/OpportunitiesCountOrderByAggregateInput";
import { OpportunitiesMaxOrderByAggregateInput } from "../inputs/OpportunitiesMaxOrderByAggregateInput";
import { OpportunitiesMinOrderByAggregateInput } from "../inputs/OpportunitiesMinOrderByAggregateInput";
import { OpportunitiesSumOrderByAggregateInput } from "../inputs/OpportunitiesSumOrderByAggregateInput";
export declare class OpportunitiesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    amount?: "asc" | "desc" | undefined;
    sales_stage?: "asc" | "desc" | undefined;
    currency?: "asc" | "desc" | undefined;
    probability?: "asc" | "desc" | undefined;
    next_step?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    assigned_to?: "asc" | "desc" | undefined;
    lead_source?: "asc" | "desc" | undefined;
    campaign?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    account_name?: "asc" | "desc" | undefined;
    expected_close_date?: "asc" | "desc" | undefined;
    _count?: OpportunitiesCountOrderByAggregateInput | undefined;
    _avg?: OpportunitiesAvgOrderByAggregateInput | undefined;
    _max?: OpportunitiesMaxOrderByAggregateInput | undefined;
    _min?: OpportunitiesMinOrderByAggregateInput | undefined;
    _sum?: OpportunitiesSumOrderByAggregateInput | undefined;
}
