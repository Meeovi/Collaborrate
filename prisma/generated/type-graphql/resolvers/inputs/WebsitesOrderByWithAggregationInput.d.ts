import { WebsitesAvgOrderByAggregateInput } from "../inputs/WebsitesAvgOrderByAggregateInput";
import { WebsitesCountOrderByAggregateInput } from "../inputs/WebsitesCountOrderByAggregateInput";
import { WebsitesMaxOrderByAggregateInput } from "../inputs/WebsitesMaxOrderByAggregateInput";
import { WebsitesMinOrderByAggregateInput } from "../inputs/WebsitesMinOrderByAggregateInput";
import { WebsitesSumOrderByAggregateInput } from "../inputs/WebsitesSumOrderByAggregateInput";
export declare class WebsitesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    shop?: "asc" | "desc" | undefined;
    store?: "asc" | "desc" | undefined;
    category?: "asc" | "desc" | undefined;
    themes?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    _count?: WebsitesCountOrderByAggregateInput | undefined;
    _avg?: WebsitesAvgOrderByAggregateInput | undefined;
    _max?: WebsitesMaxOrderByAggregateInput | undefined;
    _min?: WebsitesMinOrderByAggregateInput | undefined;
    _sum?: WebsitesSumOrderByAggregateInput | undefined;
}
