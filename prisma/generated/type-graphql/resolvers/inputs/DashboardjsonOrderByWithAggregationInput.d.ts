import { DashboardjsonAvgOrderByAggregateInput } from "../inputs/DashboardjsonAvgOrderByAggregateInput";
import { DashboardjsonCountOrderByAggregateInput } from "../inputs/DashboardjsonCountOrderByAggregateInput";
import { DashboardjsonMaxOrderByAggregateInput } from "../inputs/DashboardjsonMaxOrderByAggregateInput";
import { DashboardjsonMinOrderByAggregateInput } from "../inputs/DashboardjsonMinOrderByAggregateInput";
import { DashboardjsonSumOrderByAggregateInput } from "../inputs/DashboardjsonSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class DashboardjsonOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    url?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    definition?: SortOrderInput | undefined;
    format?: SortOrderInput | undefined;
    _count?: DashboardjsonCountOrderByAggregateInput | undefined;
    _avg?: DashboardjsonAvgOrderByAggregateInput | undefined;
    _max?: DashboardjsonMaxOrderByAggregateInput | undefined;
    _min?: DashboardjsonMinOrderByAggregateInput | undefined;
    _sum?: DashboardjsonSumOrderByAggregateInput | undefined;
}
