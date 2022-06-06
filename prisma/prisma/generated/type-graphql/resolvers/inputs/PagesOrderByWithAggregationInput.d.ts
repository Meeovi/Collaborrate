import { PagesAvgOrderByAggregateInput } from "../inputs/PagesAvgOrderByAggregateInput";
import { PagesCountOrderByAggregateInput } from "../inputs/PagesCountOrderByAggregateInput";
import { PagesMaxOrderByAggregateInput } from "../inputs/PagesMaxOrderByAggregateInput";
import { PagesMinOrderByAggregateInput } from "../inputs/PagesMinOrderByAggregateInput";
import { PagesSumOrderByAggregateInput } from "../inputs/PagesSumOrderByAggregateInput";
export declare class PagesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    enable_page?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    content_title?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    url_key?: "asc" | "desc" | undefined;
    meta_title?: "asc" | "desc" | undefined;
    meta_keywords?: "asc" | "desc" | undefined;
    meta_description?: "asc" | "desc" | undefined;
    _count?: PagesCountOrderByAggregateInput | undefined;
    _avg?: PagesAvgOrderByAggregateInput | undefined;
    _max?: PagesMaxOrderByAggregateInput | undefined;
    _min?: PagesMinOrderByAggregateInput | undefined;
    _sum?: PagesSumOrderByAggregateInput | undefined;
}
