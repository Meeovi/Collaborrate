import { PagesAvgOrderByAggregateInput } from "../inputs/PagesAvgOrderByAggregateInput";
import { PagesCountOrderByAggregateInput } from "../inputs/PagesCountOrderByAggregateInput";
import { PagesMaxOrderByAggregateInput } from "../inputs/PagesMaxOrderByAggregateInput";
import { PagesMinOrderByAggregateInput } from "../inputs/PagesMinOrderByAggregateInput";
import { PagesSumOrderByAggregateInput } from "../inputs/PagesSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class PagesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    enable_page?: SortOrderInput | undefined;
    title?: "asc" | "desc" | undefined;
    content_title?: SortOrderInput | undefined;
    content?: SortOrderInput | undefined;
    url_key?: SortOrderInput | undefined;
    meta_title?: SortOrderInput | undefined;
    meta_keywords?: SortOrderInput | undefined;
    meta_description?: SortOrderInput | undefined;
    created_at?: SortOrderInput | undefined;
    _count?: PagesCountOrderByAggregateInput | undefined;
    _avg?: PagesAvgOrderByAggregateInput | undefined;
    _max?: PagesMaxOrderByAggregateInput | undefined;
    _min?: PagesMinOrderByAggregateInput | undefined;
    _sum?: PagesSumOrderByAggregateInput | undefined;
}
