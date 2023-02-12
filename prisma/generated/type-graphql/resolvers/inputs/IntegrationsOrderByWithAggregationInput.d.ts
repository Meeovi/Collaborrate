import { IntegrationsAvgOrderByAggregateInput } from "../inputs/IntegrationsAvgOrderByAggregateInput";
import { IntegrationsCountOrderByAggregateInput } from "../inputs/IntegrationsCountOrderByAggregateInput";
import { IntegrationsMaxOrderByAggregateInput } from "../inputs/IntegrationsMaxOrderByAggregateInput";
import { IntegrationsMinOrderByAggregateInput } from "../inputs/IntegrationsMinOrderByAggregateInput";
import { IntegrationsSumOrderByAggregateInput } from "../inputs/IntegrationsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class IntegrationsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    content?: SortOrderInput | undefined;
    media?: SortOrderInput | undefined;
    location?: SortOrderInput | undefined;
    category?: SortOrderInput | undefined;
    _count?: IntegrationsCountOrderByAggregateInput | undefined;
    _avg?: IntegrationsAvgOrderByAggregateInput | undefined;
    _max?: IntegrationsMaxOrderByAggregateInput | undefined;
    _min?: IntegrationsMinOrderByAggregateInput | undefined;
    _sum?: IntegrationsSumOrderByAggregateInput | undefined;
}
