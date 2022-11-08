import { DeepdiveAvgOrderByAggregateInput } from "../inputs/DeepdiveAvgOrderByAggregateInput";
import { DeepdiveCountOrderByAggregateInput } from "../inputs/DeepdiveCountOrderByAggregateInput";
import { DeepdiveMaxOrderByAggregateInput } from "../inputs/DeepdiveMaxOrderByAggregateInput";
import { DeepdiveMinOrderByAggregateInput } from "../inputs/DeepdiveMinOrderByAggregateInput";
import { DeepdiveSumOrderByAggregateInput } from "../inputs/DeepdiveSumOrderByAggregateInput";
export declare class DeepdiveOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    end_date?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    attendees?: "asc" | "desc" | undefined;
    login?: "asc" | "desc" | undefined;
    start_date?: "asc" | "desc" | undefined;
    whid?: "asc" | "desc" | undefined;
    _count?: DeepdiveCountOrderByAggregateInput | undefined;
    _avg?: DeepdiveAvgOrderByAggregateInput | undefined;
    _max?: DeepdiveMaxOrderByAggregateInput | undefined;
    _min?: DeepdiveMinOrderByAggregateInput | undefined;
    _sum?: DeepdiveSumOrderByAggregateInput | undefined;
}
