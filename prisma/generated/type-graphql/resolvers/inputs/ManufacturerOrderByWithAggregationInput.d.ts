import { ManufacturerAvgOrderByAggregateInput } from "../inputs/ManufacturerAvgOrderByAggregateInput";
import { ManufacturerCountOrderByAggregateInput } from "../inputs/ManufacturerCountOrderByAggregateInput";
import { ManufacturerMaxOrderByAggregateInput } from "../inputs/ManufacturerMaxOrderByAggregateInput";
import { ManufacturerMinOrderByAggregateInput } from "../inputs/ManufacturerMinOrderByAggregateInput";
import { ManufacturerSumOrderByAggregateInput } from "../inputs/ManufacturerSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ManufacturerOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    code?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
    state?: SortOrderInput | undefined;
    isPublic?: SortOrderInput | undefined;
    city?: SortOrderInput | undefined;
    product?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    media?: SortOrderInput | undefined;
    products?: SortOrderInput | undefined;
    _count?: ManufacturerCountOrderByAggregateInput | undefined;
    _avg?: ManufacturerAvgOrderByAggregateInput | undefined;
    _max?: ManufacturerMaxOrderByAggregateInput | undefined;
    _min?: ManufacturerMinOrderByAggregateInput | undefined;
    _sum?: ManufacturerSumOrderByAggregateInput | undefined;
}
