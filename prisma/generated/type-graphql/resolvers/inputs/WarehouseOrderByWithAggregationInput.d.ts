import { SortOrderInput } from "../inputs/SortOrderInput";
import { WarehouseAvgOrderByAggregateInput } from "../inputs/WarehouseAvgOrderByAggregateInput";
import { WarehouseCountOrderByAggregateInput } from "../inputs/WarehouseCountOrderByAggregateInput";
import { WarehouseMaxOrderByAggregateInput } from "../inputs/WarehouseMaxOrderByAggregateInput";
import { WarehouseMinOrderByAggregateInput } from "../inputs/WarehouseMinOrderByAggregateInput";
import { WarehouseSumOrderByAggregateInput } from "../inputs/WarehouseSumOrderByAggregateInput";
export declare class WarehouseOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    city?: SortOrderInput | undefined;
    state?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
    postal?: SortOrderInput | undefined;
    status?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    products?: SortOrderInput | undefined;
    category?: SortOrderInput | undefined;
    isPublic?: SortOrderInput | undefined;
    _count?: WarehouseCountOrderByAggregateInput | undefined;
    _avg?: WarehouseAvgOrderByAggregateInput | undefined;
    _max?: WarehouseMaxOrderByAggregateInput | undefined;
    _min?: WarehouseMinOrderByAggregateInput | undefined;
    _sum?: WarehouseSumOrderByAggregateInput | undefined;
}
