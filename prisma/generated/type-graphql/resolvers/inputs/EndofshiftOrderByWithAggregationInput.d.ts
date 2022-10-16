import { EndofshiftAvgOrderByAggregateInput } from "../inputs/EndofshiftAvgOrderByAggregateInput";
import { EndofshiftCountOrderByAggregateInput } from "../inputs/EndofshiftCountOrderByAggregateInput";
import { EndofshiftMaxOrderByAggregateInput } from "../inputs/EndofshiftMaxOrderByAggregateInput";
import { EndofshiftMinOrderByAggregateInput } from "../inputs/EndofshiftMinOrderByAggregateInput";
import { EndofshiftSumOrderByAggregateInput } from "../inputs/EndofshiftSumOrderByAggregateInput";
export declare class EndofshiftOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    login?: "asc" | "desc" | undefined;
    mcms?: "asc" | "desc" | undefined;
    next_shift?: "asc" | "desc" | undefined;
    projects?: "asc" | "desc" | undefined;
    tickets?: "asc" | "desc" | undefined;
    whid?: "asc" | "desc" | undefined;
    _count?: EndofshiftCountOrderByAggregateInput | undefined;
    _avg?: EndofshiftAvgOrderByAggregateInput | undefined;
    _max?: EndofshiftMaxOrderByAggregateInput | undefined;
    _min?: EndofshiftMinOrderByAggregateInput | undefined;
    _sum?: EndofshiftSumOrderByAggregateInput | undefined;
}
