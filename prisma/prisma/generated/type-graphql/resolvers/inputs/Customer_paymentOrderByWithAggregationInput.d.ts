import { Customer_paymentAvgOrderByAggregateInput } from "../inputs/Customer_paymentAvgOrderByAggregateInput";
import { Customer_paymentCountOrderByAggregateInput } from "../inputs/Customer_paymentCountOrderByAggregateInput";
import { Customer_paymentMaxOrderByAggregateInput } from "../inputs/Customer_paymentMaxOrderByAggregateInput";
import { Customer_paymentMinOrderByAggregateInput } from "../inputs/Customer_paymentMinOrderByAggregateInput";
import { Customer_paymentSumOrderByAggregateInput } from "../inputs/Customer_paymentSumOrderByAggregateInput";
export declare class Customer_paymentOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    payment_info?: "asc" | "desc" | undefined;
    provider?: "asc" | "desc" | undefined;
    account_no?: "asc" | "desc" | undefined;
    expiry?: "asc" | "desc" | undefined;
    _count?: Customer_paymentCountOrderByAggregateInput | undefined;
    _avg?: Customer_paymentAvgOrderByAggregateInput | undefined;
    _max?: Customer_paymentMaxOrderByAggregateInput | undefined;
    _min?: Customer_paymentMinOrderByAggregateInput | undefined;
    _sum?: Customer_paymentSumOrderByAggregateInput | undefined;
}
