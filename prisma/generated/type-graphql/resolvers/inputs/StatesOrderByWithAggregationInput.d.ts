import { StatesAvgOrderByAggregateInput } from "../inputs/StatesAvgOrderByAggregateInput";
import { StatesCountOrderByAggregateInput } from "../inputs/StatesCountOrderByAggregateInput";
import { StatesMaxOrderByAggregateInput } from "../inputs/StatesMaxOrderByAggregateInput";
import { StatesMinOrderByAggregateInput } from "../inputs/StatesMinOrderByAggregateInput";
import { StatesSumOrderByAggregateInput } from "../inputs/StatesSumOrderByAggregateInput";
export declare class StatesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    trainings?: "asc" | "desc" | undefined;
    _count?: StatesCountOrderByAggregateInput | undefined;
    _avg?: StatesAvgOrderByAggregateInput | undefined;
    _max?: StatesMaxOrderByAggregateInput | undefined;
    _min?: StatesMinOrderByAggregateInput | undefined;
    _sum?: StatesSumOrderByAggregateInput | undefined;
}
