import { Newsletter_subscribersAvgOrderByAggregateInput } from "../inputs/Newsletter_subscribersAvgOrderByAggregateInput";
import { Newsletter_subscribersCountOrderByAggregateInput } from "../inputs/Newsletter_subscribersCountOrderByAggregateInput";
import { Newsletter_subscribersMaxOrderByAggregateInput } from "../inputs/Newsletter_subscribersMaxOrderByAggregateInput";
import { Newsletter_subscribersMinOrderByAggregateInput } from "../inputs/Newsletter_subscribersMinOrderByAggregateInput";
import { Newsletter_subscribersSumOrderByAggregateInput } from "../inputs/Newsletter_subscribersSumOrderByAggregateInput";
export declare class Newsletter_subscribersOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    customer_first_name?: "asc" | "desc" | undefined;
    customer_last_name?: "asc" | "desc" | undefined;
    store?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    websites?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    _count?: Newsletter_subscribersCountOrderByAggregateInput | undefined;
    _avg?: Newsletter_subscribersAvgOrderByAggregateInput | undefined;
    _max?: Newsletter_subscribersMaxOrderByAggregateInput | undefined;
    _min?: Newsletter_subscribersMinOrderByAggregateInput | undefined;
    _sum?: Newsletter_subscribersSumOrderByAggregateInput | undefined;
}
