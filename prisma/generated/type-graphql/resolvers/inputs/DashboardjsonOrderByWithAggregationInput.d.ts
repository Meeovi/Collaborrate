import { DashboardjsonAvgOrderByAggregateInput } from "../inputs/DashboardjsonAvgOrderByAggregateInput";
import { DashboardjsonCountOrderByAggregateInput } from "../inputs/DashboardjsonCountOrderByAggregateInput";
import { DashboardjsonMaxOrderByAggregateInput } from "../inputs/DashboardjsonMaxOrderByAggregateInput";
import { DashboardjsonMinOrderByAggregateInput } from "../inputs/DashboardjsonMinOrderByAggregateInput";
import { DashboardjsonSumOrderByAggregateInput } from "../inputs/DashboardjsonSumOrderByAggregateInput";
export declare class DashboardjsonOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    definition?: "asc" | "desc" | undefined;
    format?: "asc" | "desc" | undefined;
    _count?: DashboardjsonCountOrderByAggregateInput | undefined;
    _avg?: DashboardjsonAvgOrderByAggregateInput | undefined;
    _max?: DashboardjsonMaxOrderByAggregateInput | undefined;
    _min?: DashboardjsonMinOrderByAggregateInput | undefined;
    _sum?: DashboardjsonSumOrderByAggregateInput | undefined;
}
