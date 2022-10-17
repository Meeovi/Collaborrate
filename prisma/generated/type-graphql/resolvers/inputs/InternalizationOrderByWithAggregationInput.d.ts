import { InternalizationAvgOrderByAggregateInput } from "../inputs/InternalizationAvgOrderByAggregateInput";
import { InternalizationCountOrderByAggregateInput } from "../inputs/InternalizationCountOrderByAggregateInput";
import { InternalizationMaxOrderByAggregateInput } from "../inputs/InternalizationMaxOrderByAggregateInput";
import { InternalizationMinOrderByAggregateInput } from "../inputs/InternalizationMinOrderByAggregateInput";
import { InternalizationSumOrderByAggregateInput } from "../inputs/InternalizationSumOrderByAggregateInput";
export declare class InternalizationOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    region?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    default?: "asc" | "desc" | undefined;
    website?: "asc" | "desc" | undefined;
    _count?: InternalizationCountOrderByAggregateInput | undefined;
    _avg?: InternalizationAvgOrderByAggregateInput | undefined;
    _max?: InternalizationMaxOrderByAggregateInput | undefined;
    _min?: InternalizationMinOrderByAggregateInput | undefined;
    _sum?: InternalizationSumOrderByAggregateInput | undefined;
}
