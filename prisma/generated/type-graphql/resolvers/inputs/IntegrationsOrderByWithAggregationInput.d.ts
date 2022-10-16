import { IntegrationsAvgOrderByAggregateInput } from "../inputs/IntegrationsAvgOrderByAggregateInput";
import { IntegrationsCountOrderByAggregateInput } from "../inputs/IntegrationsCountOrderByAggregateInput";
import { IntegrationsMaxOrderByAggregateInput } from "../inputs/IntegrationsMaxOrderByAggregateInput";
import { IntegrationsMinOrderByAggregateInput } from "../inputs/IntegrationsMinOrderByAggregateInput";
import { IntegrationsSumOrderByAggregateInput } from "../inputs/IntegrationsSumOrderByAggregateInput";
export declare class IntegrationsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    media?: "asc" | "desc" | undefined;
    location?: "asc" | "desc" | undefined;
    category?: "asc" | "desc" | undefined;
    _count?: IntegrationsCountOrderByAggregateInput | undefined;
    _avg?: IntegrationsAvgOrderByAggregateInput | undefined;
    _max?: IntegrationsMaxOrderByAggregateInput | undefined;
    _min?: IntegrationsMinOrderByAggregateInput | undefined;
    _sum?: IntegrationsSumOrderByAggregateInput | undefined;
}
