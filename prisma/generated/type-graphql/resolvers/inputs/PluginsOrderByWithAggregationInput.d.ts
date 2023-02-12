import { PluginsAvgOrderByAggregateInput } from "../inputs/PluginsAvgOrderByAggregateInput";
import { PluginsCountOrderByAggregateInput } from "../inputs/PluginsCountOrderByAggregateInput";
import { PluginsMaxOrderByAggregateInput } from "../inputs/PluginsMaxOrderByAggregateInput";
import { PluginsMinOrderByAggregateInput } from "../inputs/PluginsMinOrderByAggregateInput";
import { PluginsSumOrderByAggregateInput } from "../inputs/PluginsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class PluginsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    url?: SortOrderInput | undefined;
    github_link?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    logo?: SortOrderInput | undefined;
    screenshots?: SortOrderInput | undefined;
    last_updated?: SortOrderInput | undefined;
    publisher_name?: SortOrderInput | undefined;
    agree_terms?: SortOrderInput | undefined;
    publisher_email?: SortOrderInput | undefined;
    _count?: PluginsCountOrderByAggregateInput | undefined;
    _avg?: PluginsAvgOrderByAggregateInput | undefined;
    _max?: PluginsMaxOrderByAggregateInput | undefined;
    _min?: PluginsMinOrderByAggregateInput | undefined;
    _sum?: PluginsSumOrderByAggregateInput | undefined;
}
