import { LogInAvgOrderByAggregateInput } from "../inputs/LogInAvgOrderByAggregateInput";
import { LogInCountOrderByAggregateInput } from "../inputs/LogInCountOrderByAggregateInput";
import { LogInMaxOrderByAggregateInput } from "../inputs/LogInMaxOrderByAggregateInput";
import { LogInMinOrderByAggregateInput } from "../inputs/LogInMinOrderByAggregateInput";
import { LogInSumOrderByAggregateInput } from "../inputs/LogInSumOrderByAggregateInput";
export declare class LogInOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    token?: "asc" | "desc" | undefined;
    expiresIn?: "asc" | "desc" | undefined;
    users?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    _count?: LogInCountOrderByAggregateInput | undefined;
    _avg?: LogInAvgOrderByAggregateInput | undefined;
    _max?: LogInMaxOrderByAggregateInput | undefined;
    _min?: LogInMinOrderByAggregateInput | undefined;
    _sum?: LogInSumOrderByAggregateInput | undefined;
}
