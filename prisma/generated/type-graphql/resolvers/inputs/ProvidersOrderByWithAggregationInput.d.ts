import { ProvidersAvgOrderByAggregateInput } from "../inputs/ProvidersAvgOrderByAggregateInput";
import { ProvidersCountOrderByAggregateInput } from "../inputs/ProvidersCountOrderByAggregateInput";
import { ProvidersMaxOrderByAggregateInput } from "../inputs/ProvidersMaxOrderByAggregateInput";
import { ProvidersMinOrderByAggregateInput } from "../inputs/ProvidersMinOrderByAggregateInput";
import { ProvidersSumOrderByAggregateInput } from "../inputs/ProvidersSumOrderByAggregateInput";
export declare class ProvidersOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    client_id?: "asc" | "desc" | undefined;
    client_secret?: "asc" | "desc" | undefined;
    host_uri?: "asc" | "desc" | undefined;
    redirect_url?: "asc" | "desc" | undefined;
    redirect_url_app?: "asc" | "desc" | undefined;
    icon?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    active?: "asc" | "desc" | undefined;
    _count?: ProvidersCountOrderByAggregateInput | undefined;
    _avg?: ProvidersAvgOrderByAggregateInput | undefined;
    _max?: ProvidersMaxOrderByAggregateInput | undefined;
    _min?: ProvidersMinOrderByAggregateInput | undefined;
    _sum?: ProvidersSumOrderByAggregateInput | undefined;
}
