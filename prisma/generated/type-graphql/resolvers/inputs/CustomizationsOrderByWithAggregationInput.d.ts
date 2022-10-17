import { CustomizationsAvgOrderByAggregateInput } from "../inputs/CustomizationsAvgOrderByAggregateInput";
import { CustomizationsCountOrderByAggregateInput } from "../inputs/CustomizationsCountOrderByAggregateInput";
import { CustomizationsMaxOrderByAggregateInput } from "../inputs/CustomizationsMaxOrderByAggregateInput";
import { CustomizationsMinOrderByAggregateInput } from "../inputs/CustomizationsMinOrderByAggregateInput";
import { CustomizationsSumOrderByAggregateInput } from "../inputs/CustomizationsSumOrderByAggregateInput";
export declare class CustomizationsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    site_name?: "asc" | "desc" | undefined;
    nav_link?: "asc" | "desc" | undefined;
    notification?: "asc" | "desc" | undefined;
    banner?: "asc" | "desc" | undefined;
    footer_link?: "asc" | "desc" | undefined;
    announcement?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    site_url?: "asc" | "desc" | undefined;
    allow_signup?: "asc" | "desc" | undefined;
    _count?: CustomizationsCountOrderByAggregateInput | undefined;
    _avg?: CustomizationsAvgOrderByAggregateInput | undefined;
    _max?: CustomizationsMaxOrderByAggregateInput | undefined;
    _min?: CustomizationsMinOrderByAggregateInput | undefined;
    _sum?: CustomizationsSumOrderByAggregateInput | undefined;
}
