import { DashboardslidesAvgOrderByAggregateInput } from "../inputs/DashboardslidesAvgOrderByAggregateInput";
import { DashboardslidesCountOrderByAggregateInput } from "../inputs/DashboardslidesCountOrderByAggregateInput";
import { DashboardslidesMaxOrderByAggregateInput } from "../inputs/DashboardslidesMaxOrderByAggregateInput";
import { DashboardslidesMinOrderByAggregateInput } from "../inputs/DashboardslidesMinOrderByAggregateInput";
import { DashboardslidesSumOrderByAggregateInput } from "../inputs/DashboardslidesSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class DashboardslidesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    categories?: SortOrderInput | undefined;
    media?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    _count?: DashboardslidesCountOrderByAggregateInput | undefined;
    _avg?: DashboardslidesAvgOrderByAggregateInput | undefined;
    _max?: DashboardslidesMaxOrderByAggregateInput | undefined;
    _min?: DashboardslidesMinOrderByAggregateInput | undefined;
    _sum?: DashboardslidesSumOrderByAggregateInput | undefined;
}
