import { LogInAvgOrderByAggregateInput } from "../inputs/LogInAvgOrderByAggregateInput";
import { LogInCountOrderByAggregateInput } from "../inputs/LogInCountOrderByAggregateInput";
import { LogInMaxOrderByAggregateInput } from "../inputs/LogInMaxOrderByAggregateInput";
import { LogInMinOrderByAggregateInput } from "../inputs/LogInMinOrderByAggregateInput";
import { LogInSumOrderByAggregateInput } from "../inputs/LogInSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class LogInOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    email?: SortOrderInput | undefined;
    password?: SortOrderInput | undefined;
    token?: SortOrderInput | undefined;
    expiresIn?: SortOrderInput | undefined;
    users?: SortOrderInput | undefined;
    username?: SortOrderInput | undefined;
    _count?: LogInCountOrderByAggregateInput | undefined;
    _avg?: LogInAvgOrderByAggregateInput | undefined;
    _max?: LogInMaxOrderByAggregateInput | undefined;
    _min?: LogInMinOrderByAggregateInput | undefined;
    _sum?: LogInSumOrderByAggregateInput | undefined;
}
