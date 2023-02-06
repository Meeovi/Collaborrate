import { PaymentsAvgOrderByAggregateInput } from "../inputs/PaymentsAvgOrderByAggregateInput";
import { PaymentsCountOrderByAggregateInput } from "../inputs/PaymentsCountOrderByAggregateInput";
import { PaymentsMaxOrderByAggregateInput } from "../inputs/PaymentsMaxOrderByAggregateInput";
import { PaymentsMinOrderByAggregateInput } from "../inputs/PaymentsMinOrderByAggregateInput";
import { PaymentsSumOrderByAggregateInput } from "../inputs/PaymentsSumOrderByAggregateInput";
export declare class PaymentsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    client_id?: "asc" | "desc" | undefined;
    client_secret?: "asc" | "desc" | undefined;
    host_uri?: "asc" | "desc" | undefined;
    redirect_url?: "asc" | "desc" | undefined;
    redirect_url_app?: "asc" | "desc" | undefined;
    icon?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    active?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    _count?: PaymentsCountOrderByAggregateInput | undefined;
    _avg?: PaymentsAvgOrderByAggregateInput | undefined;
    _max?: PaymentsMaxOrderByAggregateInput | undefined;
    _min?: PaymentsMinOrderByAggregateInput | undefined;
    _sum?: PaymentsSumOrderByAggregateInput | undefined;
}
