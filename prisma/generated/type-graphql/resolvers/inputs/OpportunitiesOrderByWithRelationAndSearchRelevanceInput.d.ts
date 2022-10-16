import { OpportunitiesOrderByRelevanceInput } from "../inputs/OpportunitiesOrderByRelevanceInput";
export declare class OpportunitiesOrderByWithRelationAndSearchRelevanceInput {
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
    _relevance?: OpportunitiesOrderByRelevanceInput | undefined;
}
