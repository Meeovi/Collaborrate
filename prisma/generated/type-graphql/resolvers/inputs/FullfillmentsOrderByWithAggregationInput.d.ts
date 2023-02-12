import { FullfillmentsAvgOrderByAggregateInput } from "../inputs/FullfillmentsAvgOrderByAggregateInput";
import { FullfillmentsCountOrderByAggregateInput } from "../inputs/FullfillmentsCountOrderByAggregateInput";
import { FullfillmentsMaxOrderByAggregateInput } from "../inputs/FullfillmentsMaxOrderByAggregateInput";
import { FullfillmentsMinOrderByAggregateInput } from "../inputs/FullfillmentsMinOrderByAggregateInput";
import { FullfillmentsSumOrderByAggregateInput } from "../inputs/FullfillmentsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class FullfillmentsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    shipping_zones?: SortOrderInput | undefined;
    company?: SortOrderInput | undefined;
    address?: SortOrderInput | undefined;
    address_two?: SortOrderInput | undefined;
    city?: SortOrderInput | undefined;
    state?: SortOrderInput | undefined;
    zipcode?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
    country_area?: SortOrderInput | undefined;
    phone?: SortOrderInput | undefined;
    pickup?: SortOrderInput | undefined;
    stock?: SortOrderInput | undefined;
    _count?: FullfillmentsCountOrderByAggregateInput | undefined;
    _avg?: FullfillmentsAvgOrderByAggregateInput | undefined;
    _max?: FullfillmentsMaxOrderByAggregateInput | undefined;
    _min?: FullfillmentsMinOrderByAggregateInput | undefined;
    _sum?: FullfillmentsSumOrderByAggregateInput | undefined;
}
