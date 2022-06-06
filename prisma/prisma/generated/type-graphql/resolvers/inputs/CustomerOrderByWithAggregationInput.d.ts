import { CustomerAvgOrderByAggregateInput } from "../inputs/CustomerAvgOrderByAggregateInput";
import { CustomerCountOrderByAggregateInput } from "../inputs/CustomerCountOrderByAggregateInput";
import { CustomerMaxOrderByAggregateInput } from "../inputs/CustomerMaxOrderByAggregateInput";
import { CustomerMinOrderByAggregateInput } from "../inputs/CustomerMinOrderByAggregateInput";
import { CustomerSumOrderByAggregateInput } from "../inputs/CustomerSumOrderByAggregateInput";
export declare class CustomerOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    firstname?: "asc" | "desc" | undefined;
    lastname?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    state?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    postal?: "asc" | "desc" | undefined;
    active?: "asc" | "desc" | undefined;
    _count?: CustomerCountOrderByAggregateInput | undefined;
    _avg?: CustomerAvgOrderByAggregateInput | undefined;
    _max?: CustomerMaxOrderByAggregateInput | undefined;
    _min?: CustomerMinOrderByAggregateInput | undefined;
    _sum?: CustomerSumOrderByAggregateInput | undefined;
}
