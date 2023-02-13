import { PartnersAvgOrderByAggregateInput } from "../inputs/PartnersAvgOrderByAggregateInput";
import { PartnersCountOrderByAggregateInput } from "../inputs/PartnersCountOrderByAggregateInput";
import { PartnersMaxOrderByAggregateInput } from "../inputs/PartnersMaxOrderByAggregateInput";
import { PartnersMinOrderByAggregateInput } from "../inputs/PartnersMinOrderByAggregateInput";
import { PartnersSumOrderByAggregateInput } from "../inputs/PartnersSumOrderByAggregateInput";
export declare class PartnersOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    address?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    isPublic?: "asc" | "desc" | undefined;
    business_type?: "asc" | "desc" | undefined;
    _count?: PartnersCountOrderByAggregateInput | undefined;
    _avg?: PartnersAvgOrderByAggregateInput | undefined;
    _max?: PartnersMaxOrderByAggregateInput | undefined;
    _min?: PartnersMinOrderByAggregateInput | undefined;
    _sum?: PartnersSumOrderByAggregateInput | undefined;
}
