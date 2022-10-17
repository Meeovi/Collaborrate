import { Credit_memosAvgOrderByAggregateInput } from "../inputs/Credit_memosAvgOrderByAggregateInput";
import { Credit_memosCountOrderByAggregateInput } from "../inputs/Credit_memosCountOrderByAggregateInput";
import { Credit_memosMaxOrderByAggregateInput } from "../inputs/Credit_memosMaxOrderByAggregateInput";
import { Credit_memosMinOrderByAggregateInput } from "../inputs/Credit_memosMinOrderByAggregateInput";
import { Credit_memosSumOrderByAggregateInput } from "../inputs/Credit_memosSumOrderByAggregateInput";
export declare class Credit_memosOrderByWithAggregationInput {
    credit_memo?: "asc" | "desc" | undefined;
    order_number?: "asc" | "desc" | undefined;
    created?: "asc" | "desc" | undefined;
    bill_to_name?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    refunded?: "asc" | "desc" | undefined;
    action?: "asc" | "desc" | undefined;
    id?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    prod_id?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    _count?: Credit_memosCountOrderByAggregateInput | undefined;
    _avg?: Credit_memosAvgOrderByAggregateInput | undefined;
    _max?: Credit_memosMaxOrderByAggregateInput | undefined;
    _min?: Credit_memosMinOrderByAggregateInput | undefined;
    _sum?: Credit_memosSumOrderByAggregateInput | undefined;
}
