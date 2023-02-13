import { PluginsAvgOrderByAggregateInput } from "../inputs/PluginsAvgOrderByAggregateInput";
import { PluginsCountOrderByAggregateInput } from "../inputs/PluginsCountOrderByAggregateInput";
import { PluginsMaxOrderByAggregateInput } from "../inputs/PluginsMaxOrderByAggregateInput";
import { PluginsMinOrderByAggregateInput } from "../inputs/PluginsMinOrderByAggregateInput";
import { PluginsSumOrderByAggregateInput } from "../inputs/PluginsSumOrderByAggregateInput";
export declare class PluginsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    github_link?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    logo?: "asc" | "desc" | undefined;
    screenshots?: "asc" | "desc" | undefined;
    last_updated?: "asc" | "desc" | undefined;
    publisher_name?: "asc" | "desc" | undefined;
    agree_terms?: "asc" | "desc" | undefined;
    publisher_email?: "asc" | "desc" | undefined;
    _count?: PluginsCountOrderByAggregateInput | undefined;
    _avg?: PluginsAvgOrderByAggregateInput | undefined;
    _max?: PluginsMaxOrderByAggregateInput | undefined;
    _min?: PluginsMinOrderByAggregateInput | undefined;
    _sum?: PluginsSumOrderByAggregateInput | undefined;
}
