import { TransactionsAvgOrderByAggregateInput } from "../inputs/TransactionsAvgOrderByAggregateInput";
import { TransactionsCountOrderByAggregateInput } from "../inputs/TransactionsCountOrderByAggregateInput";
import { TransactionsMaxOrderByAggregateInput } from "../inputs/TransactionsMaxOrderByAggregateInput";
import { TransactionsMinOrderByAggregateInput } from "../inputs/TransactionsMinOrderByAggregateInput";
import { TransactionsSumOrderByAggregateInput } from "../inputs/TransactionsSumOrderByAggregateInput";
export declare class TransactionsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    order_id?: "asc" | "desc" | undefined;
    transaction_id?: "asc" | "desc" | undefined;
    parent_transaction_id?: "asc" | "desc" | undefined;
    created?: "asc" | "desc" | undefined;
    payment_method?: "asc" | "desc" | undefined;
    closed?: "asc" | "desc" | undefined;
    customer_payment?: "asc" | "desc" | undefined;
    orders?: "asc" | "desc" | undefined;
    _count?: TransactionsCountOrderByAggregateInput | undefined;
    _avg?: TransactionsAvgOrderByAggregateInput | undefined;
    _max?: TransactionsMaxOrderByAggregateInput | undefined;
    _min?: TransactionsMinOrderByAggregateInput | undefined;
    _sum?: TransactionsSumOrderByAggregateInput | undefined;
}
