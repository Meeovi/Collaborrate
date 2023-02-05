import { BrandsAvgOrderByAggregateInput } from "../inputs/BrandsAvgOrderByAggregateInput";
import { BrandsCountOrderByAggregateInput } from "../inputs/BrandsCountOrderByAggregateInput";
import { BrandsMaxOrderByAggregateInput } from "../inputs/BrandsMaxOrderByAggregateInput";
import { BrandsMinOrderByAggregateInput } from "../inputs/BrandsMinOrderByAggregateInput";
import { BrandsSumOrderByAggregateInput } from "../inputs/BrandsSumOrderByAggregateInput";
export declare class BrandsOrderByWithAggregationInput {
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
    mediamanager?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    workspaces?: "asc" | "desc" | undefined;
    _count?: BrandsCountOrderByAggregateInput | undefined;
    _avg?: BrandsAvgOrderByAggregateInput | undefined;
    _max?: BrandsMaxOrderByAggregateInput | undefined;
    _min?: BrandsMinOrderByAggregateInput | undefined;
    _sum?: BrandsSumOrderByAggregateInput | undefined;
}
