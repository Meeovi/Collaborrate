import { Customer_groupAvgOrderByAggregateInput } from "../inputs/Customer_groupAvgOrderByAggregateInput";
import { Customer_groupCountOrderByAggregateInput } from "../inputs/Customer_groupCountOrderByAggregateInput";
import { Customer_groupMaxOrderByAggregateInput } from "../inputs/Customer_groupMaxOrderByAggregateInput";
import { Customer_groupMinOrderByAggregateInput } from "../inputs/Customer_groupMinOrderByAggregateInput";
import { Customer_groupSumOrderByAggregateInput } from "../inputs/Customer_groupSumOrderByAggregateInput";
export declare class Customer_groupOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    tax_class?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    _count?: Customer_groupCountOrderByAggregateInput | undefined;
    _avg?: Customer_groupAvgOrderByAggregateInput | undefined;
    _max?: Customer_groupMaxOrderByAggregateInput | undefined;
    _min?: Customer_groupMinOrderByAggregateInput | undefined;
    _sum?: Customer_groupSumOrderByAggregateInput | undefined;
}
