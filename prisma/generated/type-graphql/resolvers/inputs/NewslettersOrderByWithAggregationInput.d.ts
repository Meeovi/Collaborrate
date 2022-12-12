import { NewslettersAvgOrderByAggregateInput } from "../inputs/NewslettersAvgOrderByAggregateInput";
import { NewslettersCountOrderByAggregateInput } from "../inputs/NewslettersCountOrderByAggregateInput";
import { NewslettersMaxOrderByAggregateInput } from "../inputs/NewslettersMaxOrderByAggregateInput";
import { NewslettersMinOrderByAggregateInput } from "../inputs/NewslettersMinOrderByAggregateInput";
import { NewslettersSumOrderByAggregateInput } from "../inputs/NewslettersSumOrderByAggregateInput";
export declare class NewslettersOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    customer_first_name?: "asc" | "desc" | undefined;
    customer_last_name?: "asc" | "desc" | undefined;
    store?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    websites?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    _count?: NewslettersCountOrderByAggregateInput | undefined;
    _avg?: NewslettersAvgOrderByAggregateInput | undefined;
    _max?: NewslettersMaxOrderByAggregateInput | undefined;
    _min?: NewslettersMinOrderByAggregateInput | undefined;
    _sum?: NewslettersSumOrderByAggregateInput | undefined;
}
