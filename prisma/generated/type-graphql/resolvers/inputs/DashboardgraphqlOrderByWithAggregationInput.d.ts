import { DashboardgraphqlAvgOrderByAggregateInput } from "../inputs/DashboardgraphqlAvgOrderByAggregateInput";
import { DashboardgraphqlCountOrderByAggregateInput } from "../inputs/DashboardgraphqlCountOrderByAggregateInput";
import { DashboardgraphqlMaxOrderByAggregateInput } from "../inputs/DashboardgraphqlMaxOrderByAggregateInput";
import { DashboardgraphqlMinOrderByAggregateInput } from "../inputs/DashboardgraphqlMinOrderByAggregateInput";
import { DashboardgraphqlSumOrderByAggregateInput } from "../inputs/DashboardgraphqlSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class DashboardgraphqlOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    url?: SortOrderInput | undefined;
    headerValue?: SortOrderInput | undefined;
    headerKey?: SortOrderInput | undefined;
    urlValue?: SortOrderInput | undefined;
    urlKey?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    _count?: DashboardgraphqlCountOrderByAggregateInput | undefined;
    _avg?: DashboardgraphqlAvgOrderByAggregateInput | undefined;
    _max?: DashboardgraphqlMaxOrderByAggregateInput | undefined;
    _min?: DashboardgraphqlMinOrderByAggregateInput | undefined;
    _sum?: DashboardgraphqlSumOrderByAggregateInput | undefined;
}
