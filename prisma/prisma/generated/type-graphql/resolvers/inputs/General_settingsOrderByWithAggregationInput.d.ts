import { General_settingsAvgOrderByAggregateInput } from "../inputs/General_settingsAvgOrderByAggregateInput";
import { General_settingsCountOrderByAggregateInput } from "../inputs/General_settingsCountOrderByAggregateInput";
import { General_settingsMaxOrderByAggregateInput } from "../inputs/General_settingsMaxOrderByAggregateInput";
import { General_settingsMinOrderByAggregateInput } from "../inputs/General_settingsMinOrderByAggregateInput";
import { General_settingsSumOrderByAggregateInput } from "../inputs/General_settingsSumOrderByAggregateInput";
export declare class General_settingsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    tagline?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    access_restrictions?: "asc" | "desc" | undefined;
    restriction_mode?: "asc" | "desc" | undefined;
    startup_page?: "asc" | "desc" | undefined;
    landing_page?: "asc" | "desc" | undefined;
    http_response?: "asc" | "desc" | undefined;
    store_email?: "asc" | "desc" | undefined;
    store_contact?: "asc" | "desc" | undefined;
    store_contact_two?: "asc" | "desc" | undefined;
    customer_support?: "asc" | "desc" | undefined;
    _count?: General_settingsCountOrderByAggregateInput | undefined;
    _avg?: General_settingsAvgOrderByAggregateInput | undefined;
    _max?: General_settingsMaxOrderByAggregateInput | undefined;
    _min?: General_settingsMinOrderByAggregateInput | undefined;
    _sum?: General_settingsSumOrderByAggregateInput | undefined;
}
