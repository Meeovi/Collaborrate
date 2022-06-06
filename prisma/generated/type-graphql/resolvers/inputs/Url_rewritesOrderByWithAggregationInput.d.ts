import { Url_rewritesAvgOrderByAggregateInput } from "../inputs/Url_rewritesAvgOrderByAggregateInput";
import { Url_rewritesCountOrderByAggregateInput } from "../inputs/Url_rewritesCountOrderByAggregateInput";
import { Url_rewritesMaxOrderByAggregateInput } from "../inputs/Url_rewritesMaxOrderByAggregateInput";
import { Url_rewritesMinOrderByAggregateInput } from "../inputs/Url_rewritesMinOrderByAggregateInput";
import { Url_rewritesSumOrderByAggregateInput } from "../inputs/Url_rewritesSumOrderByAggregateInput";
export declare class Url_rewritesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    request_path?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    redirect_type?: "asc" | "desc" | undefined;
    target_path?: "asc" | "desc" | undefined;
    store?: "asc" | "desc" | undefined;
    _count?: Url_rewritesCountOrderByAggregateInput | undefined;
    _avg?: Url_rewritesAvgOrderByAggregateInput | undefined;
    _max?: Url_rewritesMaxOrderByAggregateInput | undefined;
    _min?: Url_rewritesMinOrderByAggregateInput | undefined;
    _sum?: Url_rewritesSumOrderByAggregateInput | undefined;
}
