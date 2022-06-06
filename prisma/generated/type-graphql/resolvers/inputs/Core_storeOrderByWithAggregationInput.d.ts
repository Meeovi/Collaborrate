import { Core_storeAvgOrderByAggregateInput } from "../inputs/Core_storeAvgOrderByAggregateInput";
import { Core_storeCountOrderByAggregateInput } from "../inputs/Core_storeCountOrderByAggregateInput";
import { Core_storeMaxOrderByAggregateInput } from "../inputs/Core_storeMaxOrderByAggregateInput";
import { Core_storeMinOrderByAggregateInput } from "../inputs/Core_storeMinOrderByAggregateInput";
import { Core_storeSumOrderByAggregateInput } from "../inputs/Core_storeSumOrderByAggregateInput";
export declare class Core_storeOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    key?: "asc" | "desc" | undefined;
    value?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    environment?: "asc" | "desc" | undefined;
    tag?: "asc" | "desc" | undefined;
    _count?: Core_storeCountOrderByAggregateInput | undefined;
    _avg?: Core_storeAvgOrderByAggregateInput | undefined;
    _max?: Core_storeMaxOrderByAggregateInput | undefined;
    _min?: Core_storeMinOrderByAggregateInput | undefined;
    _sum?: Core_storeSumOrderByAggregateInput | undefined;
}
