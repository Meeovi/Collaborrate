import { ImportmAvgOrderByAggregateInput } from "../inputs/ImportmAvgOrderByAggregateInput";
import { ImportmCountOrderByAggregateInput } from "../inputs/ImportmCountOrderByAggregateInput";
import { ImportmMaxOrderByAggregateInput } from "../inputs/ImportmMaxOrderByAggregateInput";
import { ImportmMinOrderByAggregateInput } from "../inputs/ImportmMinOrderByAggregateInput";
import { ImportmSumOrderByAggregateInput } from "../inputs/ImportmSumOrderByAggregateInput";
export declare class ImportmOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    file?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    _count?: ImportmCountOrderByAggregateInput | undefined;
    _avg?: ImportmAvgOrderByAggregateInput | undefined;
    _max?: ImportmMaxOrderByAggregateInput | undefined;
    _min?: ImportmMinOrderByAggregateInput | undefined;
    _sum?: ImportmSumOrderByAggregateInput | undefined;
}
