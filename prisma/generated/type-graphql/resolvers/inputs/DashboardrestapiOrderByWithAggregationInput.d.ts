import { DashboardrestapiAvgOrderByAggregateInput } from "../inputs/DashboardrestapiAvgOrderByAggregateInput";
import { DashboardrestapiCountOrderByAggregateInput } from "../inputs/DashboardrestapiCountOrderByAggregateInput";
import { DashboardrestapiMaxOrderByAggregateInput } from "../inputs/DashboardrestapiMaxOrderByAggregateInput";
import { DashboardrestapiMinOrderByAggregateInput } from "../inputs/DashboardrestapiMinOrderByAggregateInput";
import { DashboardrestapiSumOrderByAggregateInput } from "../inputs/DashboardrestapiSumOrderByAggregateInput";
export declare class DashboardrestapiOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    headerValue?: "asc" | "desc" | undefined;
    headerKey?: "asc" | "desc" | undefined;
    authenticationType?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    _count?: DashboardrestapiCountOrderByAggregateInput | undefined;
    _avg?: DashboardrestapiAvgOrderByAggregateInput | undefined;
    _max?: DashboardrestapiMaxOrderByAggregateInput | undefined;
    _min?: DashboardrestapiMinOrderByAggregateInput | undefined;
    _sum?: DashboardrestapiSumOrderByAggregateInput | undefined;
}
