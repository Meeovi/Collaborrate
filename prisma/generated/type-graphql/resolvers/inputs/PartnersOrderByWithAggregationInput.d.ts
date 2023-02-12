import { PartnersAvgOrderByAggregateInput } from "../inputs/PartnersAvgOrderByAggregateInput";
import { PartnersCountOrderByAggregateInput } from "../inputs/PartnersCountOrderByAggregateInput";
import { PartnersMaxOrderByAggregateInput } from "../inputs/PartnersMaxOrderByAggregateInput";
import { PartnersMinOrderByAggregateInput } from "../inputs/PartnersMinOrderByAggregateInput";
import { PartnersSumOrderByAggregateInput } from "../inputs/PartnersSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class PartnersOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    address?: SortOrderInput | undefined;
    city?: SortOrderInput | undefined;
    state?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
    isPublic?: SortOrderInput | undefined;
    business_type?: SortOrderInput | undefined;
    _count?: PartnersCountOrderByAggregateInput | undefined;
    _avg?: PartnersAvgOrderByAggregateInput | undefined;
    _max?: PartnersMaxOrderByAggregateInput | undefined;
    _min?: PartnersMinOrderByAggregateInput | undefined;
    _sum?: PartnersSumOrderByAggregateInput | undefined;
}
