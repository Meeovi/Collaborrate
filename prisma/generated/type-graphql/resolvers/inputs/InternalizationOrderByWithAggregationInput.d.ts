import { InternalizationAvgOrderByAggregateInput } from "../inputs/InternalizationAvgOrderByAggregateInput";
import { InternalizationCountOrderByAggregateInput } from "../inputs/InternalizationCountOrderByAggregateInput";
import { InternalizationMaxOrderByAggregateInput } from "../inputs/InternalizationMaxOrderByAggregateInput";
import { InternalizationMinOrderByAggregateInput } from "../inputs/InternalizationMinOrderByAggregateInput";
import { InternalizationSumOrderByAggregateInput } from "../inputs/InternalizationSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class InternalizationOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    region?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    default?: SortOrderInput | undefined;
    website?: SortOrderInput | undefined;
    _count?: InternalizationCountOrderByAggregateInput | undefined;
    _avg?: InternalizationAvgOrderByAggregateInput | undefined;
    _max?: InternalizationMaxOrderByAggregateInput | undefined;
    _min?: InternalizationMinOrderByAggregateInput | undefined;
    _sum?: InternalizationSumOrderByAggregateInput | undefined;
}
