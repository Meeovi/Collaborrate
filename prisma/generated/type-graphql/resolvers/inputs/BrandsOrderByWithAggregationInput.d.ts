import { BrandsAvgOrderByAggregateInput } from "../inputs/BrandsAvgOrderByAggregateInput";
import { BrandsCountOrderByAggregateInput } from "../inputs/BrandsCountOrderByAggregateInput";
import { BrandsMaxOrderByAggregateInput } from "../inputs/BrandsMaxOrderByAggregateInput";
import { BrandsMinOrderByAggregateInput } from "../inputs/BrandsMinOrderByAggregateInput";
import { BrandsSumOrderByAggregateInput } from "../inputs/BrandsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class BrandsOrderByWithAggregationInput {
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
    mediamanager?: SortOrderInput | undefined;
    products?: SortOrderInput | undefined;
    workspaces?: SortOrderInput | undefined;
    _count?: BrandsCountOrderByAggregateInput | undefined;
    _avg?: BrandsAvgOrderByAggregateInput | undefined;
    _max?: BrandsMaxOrderByAggregateInput | undefined;
    _min?: BrandsMinOrderByAggregateInput | undefined;
    _sum?: BrandsSumOrderByAggregateInput | undefined;
}
