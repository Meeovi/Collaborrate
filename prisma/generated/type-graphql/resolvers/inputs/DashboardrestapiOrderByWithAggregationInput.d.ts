import { DashboardrestapiAvgOrderByAggregateInput } from "../inputs/DashboardrestapiAvgOrderByAggregateInput";
import { DashboardrestapiCountOrderByAggregateInput } from "../inputs/DashboardrestapiCountOrderByAggregateInput";
import { DashboardrestapiMaxOrderByAggregateInput } from "../inputs/DashboardrestapiMaxOrderByAggregateInput";
import { DashboardrestapiMinOrderByAggregateInput } from "../inputs/DashboardrestapiMinOrderByAggregateInput";
import { DashboardrestapiSumOrderByAggregateInput } from "../inputs/DashboardrestapiSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class DashboardrestapiOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    url?: SortOrderInput | undefined;
    headerValue?: SortOrderInput | undefined;
    headerKey?: SortOrderInput | undefined;
    authenticationType?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    _count?: DashboardrestapiCountOrderByAggregateInput | undefined;
    _avg?: DashboardrestapiAvgOrderByAggregateInput | undefined;
    _max?: DashboardrestapiMaxOrderByAggregateInput | undefined;
    _min?: DashboardrestapiMinOrderByAggregateInput | undefined;
    _sum?: DashboardrestapiSumOrderByAggregateInput | undefined;
}
