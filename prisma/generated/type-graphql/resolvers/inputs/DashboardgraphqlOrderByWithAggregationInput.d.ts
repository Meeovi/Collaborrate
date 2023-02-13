import { DashboardgraphqlAvgOrderByAggregateInput } from "../inputs/DashboardgraphqlAvgOrderByAggregateInput";
import { DashboardgraphqlCountOrderByAggregateInput } from "../inputs/DashboardgraphqlCountOrderByAggregateInput";
import { DashboardgraphqlMaxOrderByAggregateInput } from "../inputs/DashboardgraphqlMaxOrderByAggregateInput";
import { DashboardgraphqlMinOrderByAggregateInput } from "../inputs/DashboardgraphqlMinOrderByAggregateInput";
import { DashboardgraphqlSumOrderByAggregateInput } from "../inputs/DashboardgraphqlSumOrderByAggregateInput";
export declare class DashboardgraphqlOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    headerValue?: "asc" | "desc" | undefined;
    headerKey?: "asc" | "desc" | undefined;
    urlValue?: "asc" | "desc" | undefined;
    urlKey?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    _count?: DashboardgraphqlCountOrderByAggregateInput | undefined;
    _avg?: DashboardgraphqlAvgOrderByAggregateInput | undefined;
    _max?: DashboardgraphqlMaxOrderByAggregateInput | undefined;
    _min?: DashboardgraphqlMinOrderByAggregateInput | undefined;
    _sum?: DashboardgraphqlSumOrderByAggregateInput | undefined;
}
