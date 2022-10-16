import { OotoAvgOrderByAggregateInput } from "../inputs/OotoAvgOrderByAggregateInput";
import { OotoCountOrderByAggregateInput } from "../inputs/OotoCountOrderByAggregateInput";
import { OotoMaxOrderByAggregateInput } from "../inputs/OotoMaxOrderByAggregateInput";
import { OotoMinOrderByAggregateInput } from "../inputs/OotoMinOrderByAggregateInput";
import { OotoSumOrderByAggregateInput } from "../inputs/OotoSumOrderByAggregateInput";
export declare class OotoOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    login?: "asc" | "desc" | undefined;
    start_date?: "asc" | "desc" | undefined;
    end_date?: "asc" | "desc" | undefined;
    note?: "asc" | "desc" | undefined;
    using_time?: "asc" | "desc" | undefined;
    location?: "asc" | "desc" | undefined;
    _count?: OotoCountOrderByAggregateInput | undefined;
    _avg?: OotoAvgOrderByAggregateInput | undefined;
    _max?: OotoMaxOrderByAggregateInput | undefined;
    _min?: OotoMinOrderByAggregateInput | undefined;
    _sum?: OotoSumOrderByAggregateInput | undefined;
}
