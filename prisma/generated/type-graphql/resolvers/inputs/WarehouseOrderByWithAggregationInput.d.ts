import { WarehouseAvgOrderByAggregateInput } from "../inputs/WarehouseAvgOrderByAggregateInput";
import { WarehouseCountOrderByAggregateInput } from "../inputs/WarehouseCountOrderByAggregateInput";
import { WarehouseMaxOrderByAggregateInput } from "../inputs/WarehouseMaxOrderByAggregateInput";
import { WarehouseMinOrderByAggregateInput } from "../inputs/WarehouseMinOrderByAggregateInput";
import { WarehouseSumOrderByAggregateInput } from "../inputs/WarehouseSumOrderByAggregateInput";
export declare class WarehouseOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    postal?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    category?: "asc" | "desc" | undefined;
    isPublic?: "asc" | "desc" | undefined;
    _count?: WarehouseCountOrderByAggregateInput | undefined;
    _avg?: WarehouseAvgOrderByAggregateInput | undefined;
    _max?: WarehouseMaxOrderByAggregateInput | undefined;
    _min?: WarehouseMinOrderByAggregateInput | undefined;
    _sum?: WarehouseSumOrderByAggregateInput | undefined;
}
