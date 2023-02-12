import { ApitokenAvgOrderByAggregateInput } from "../inputs/ApitokenAvgOrderByAggregateInput";
import { ApitokenCountOrderByAggregateInput } from "../inputs/ApitokenCountOrderByAggregateInput";
import { ApitokenMaxOrderByAggregateInput } from "../inputs/ApitokenMaxOrderByAggregateInput";
import { ApitokenMinOrderByAggregateInput } from "../inputs/ApitokenMinOrderByAggregateInput";
import { ApitokenSumOrderByAggregateInput } from "../inputs/ApitokenSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ApitokenOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: "asc" | "desc" | undefined;
    token_type?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    token?: "asc" | "desc" | undefined;
    _count?: ApitokenCountOrderByAggregateInput | undefined;
    _avg?: ApitokenAvgOrderByAggregateInput | undefined;
    _max?: ApitokenMaxOrderByAggregateInput | undefined;
    _min?: ApitokenMinOrderByAggregateInput | undefined;
    _sum?: ApitokenSumOrderByAggregateInput | undefined;
}
