import { ZonesAvgOrderByAggregateInput } from "../inputs/ZonesAvgOrderByAggregateInput";
import { ZonesCountOrderByAggregateInput } from "../inputs/ZonesCountOrderByAggregateInput";
import { ZonesMaxOrderByAggregateInput } from "../inputs/ZonesMaxOrderByAggregateInput";
import { ZonesMinOrderByAggregateInput } from "../inputs/ZonesMinOrderByAggregateInput";
import { ZonesSumOrderByAggregateInput } from "../inputs/ZonesSumOrderByAggregateInput";
export declare class ZonesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    scope?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    code?: "asc" | "desc" | undefined;
    _count?: ZonesCountOrderByAggregateInput | undefined;
    _avg?: ZonesAvgOrderByAggregateInput | undefined;
    _max?: ZonesMaxOrderByAggregateInput | undefined;
    _min?: ZonesMinOrderByAggregateInput | undefined;
    _sum?: ZonesSumOrderByAggregateInput | undefined;
}
