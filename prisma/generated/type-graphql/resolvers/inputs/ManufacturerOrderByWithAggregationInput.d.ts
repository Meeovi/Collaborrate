import { ManufacturerAvgOrderByAggregateInput } from "../inputs/ManufacturerAvgOrderByAggregateInput";
import { ManufacturerCountOrderByAggregateInput } from "../inputs/ManufacturerCountOrderByAggregateInput";
import { ManufacturerMaxOrderByAggregateInput } from "../inputs/ManufacturerMaxOrderByAggregateInput";
import { ManufacturerMinOrderByAggregateInput } from "../inputs/ManufacturerMinOrderByAggregateInput";
import { ManufacturerSumOrderByAggregateInput } from "../inputs/ManufacturerSumOrderByAggregateInput";
export declare class ManufacturerOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    code?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    isPublic?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    product?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    media?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    _count?: ManufacturerCountOrderByAggregateInput | undefined;
    _avg?: ManufacturerAvgOrderByAggregateInput | undefined;
    _max?: ManufacturerMaxOrderByAggregateInput | undefined;
    _min?: ManufacturerMinOrderByAggregateInput | undefined;
    _sum?: ManufacturerSumOrderByAggregateInput | undefined;
}
