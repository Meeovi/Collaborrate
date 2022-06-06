import { SourceAvgOrderByAggregateInput } from "../inputs/SourceAvgOrderByAggregateInput";
import { SourceCountOrderByAggregateInput } from "../inputs/SourceCountOrderByAggregateInput";
import { SourceMaxOrderByAggregateInput } from "../inputs/SourceMaxOrderByAggregateInput";
import { SourceMinOrderByAggregateInput } from "../inputs/SourceMinOrderByAggregateInput";
import { SourceSumOrderByAggregateInput } from "../inputs/SourceSumOrderByAggregateInput";
export declare class SourceOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    code?: "asc" | "desc" | undefined;
    enabled?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    latitude?: "asc" | "desc" | undefined;
    longitude?: "asc" | "desc" | undefined;
    pickup_location?: "asc" | "desc" | undefined;
    contact_name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    phone?: "asc" | "desc" | undefined;
    fax?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    street?: "asc" | "desc" | undefined;
    postcode?: "asc" | "desc" | undefined;
    _count?: SourceCountOrderByAggregateInput | undefined;
    _avg?: SourceAvgOrderByAggregateInput | undefined;
    _max?: SourceMaxOrderByAggregateInput | undefined;
    _min?: SourceMinOrderByAggregateInput | undefined;
    _sum?: SourceSumOrderByAggregateInput | undefined;
}
