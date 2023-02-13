import { FullfillmentsAvgOrderByAggregateInput } from "../inputs/FullfillmentsAvgOrderByAggregateInput";
import { FullfillmentsCountOrderByAggregateInput } from "../inputs/FullfillmentsCountOrderByAggregateInput";
import { FullfillmentsMaxOrderByAggregateInput } from "../inputs/FullfillmentsMaxOrderByAggregateInput";
import { FullfillmentsMinOrderByAggregateInput } from "../inputs/FullfillmentsMinOrderByAggregateInput";
import { FullfillmentsSumOrderByAggregateInput } from "../inputs/FullfillmentsSumOrderByAggregateInput";
export declare class FullfillmentsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    shipping_zones?: "asc" | "desc" | undefined;
    company?: "asc" | "desc" | undefined;
    address?: "asc" | "desc" | undefined;
    address_two?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    zipcode?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    country_area?: "asc" | "desc" | undefined;
    phone?: "asc" | "desc" | undefined;
    pickup?: "asc" | "desc" | undefined;
    stock?: "asc" | "desc" | undefined;
    _count?: FullfillmentsCountOrderByAggregateInput | undefined;
    _avg?: FullfillmentsAvgOrderByAggregateInput | undefined;
    _max?: FullfillmentsMaxOrderByAggregateInput | undefined;
    _min?: FullfillmentsMinOrderByAggregateInput | undefined;
    _sum?: FullfillmentsSumOrderByAggregateInput | undefined;
}
