import { SortOrderInput } from "../inputs/SortOrderInput";
import { ZonesAvgOrderByAggregateInput } from "../inputs/ZonesAvgOrderByAggregateInput";
import { ZonesCountOrderByAggregateInput } from "../inputs/ZonesCountOrderByAggregateInput";
import { ZonesMaxOrderByAggregateInput } from "../inputs/ZonesMaxOrderByAggregateInput";
import { ZonesMinOrderByAggregateInput } from "../inputs/ZonesMinOrderByAggregateInput";
import { ZonesSumOrderByAggregateInput } from "../inputs/ZonesSumOrderByAggregateInput";
export declare class ZonesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    updated_at?: SortOrderInput | undefined;
    scope?: SortOrderInput | undefined;
    type?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
    code?: SortOrderInput | undefined;
    _count?: ZonesCountOrderByAggregateInput | undefined;
    _avg?: ZonesAvgOrderByAggregateInput | undefined;
    _max?: ZonesMaxOrderByAggregateInput | undefined;
    _min?: ZonesMinOrderByAggregateInput | undefined;
    _sum?: ZonesSumOrderByAggregateInput | undefined;
}
