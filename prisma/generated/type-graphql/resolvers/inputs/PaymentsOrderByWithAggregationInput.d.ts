import { PaymentsAvgOrderByAggregateInput } from "../inputs/PaymentsAvgOrderByAggregateInput";
import { PaymentsCountOrderByAggregateInput } from "../inputs/PaymentsCountOrderByAggregateInput";
import { PaymentsMaxOrderByAggregateInput } from "../inputs/PaymentsMaxOrderByAggregateInput";
import { PaymentsMinOrderByAggregateInput } from "../inputs/PaymentsMinOrderByAggregateInput";
import { PaymentsSumOrderByAggregateInput } from "../inputs/PaymentsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class PaymentsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    client_id?: SortOrderInput | undefined;
    client_secret?: SortOrderInput | undefined;
    host_uri?: SortOrderInput | undefined;
    redirect_url?: SortOrderInput | undefined;
    redirect_url_app?: SortOrderInput | undefined;
    icon?: SortOrderInput | undefined;
    name?: "asc" | "desc" | undefined;
    active?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
    _count?: PaymentsCountOrderByAggregateInput | undefined;
    _avg?: PaymentsAvgOrderByAggregateInput | undefined;
    _max?: PaymentsMaxOrderByAggregateInput | undefined;
    _min?: PaymentsMinOrderByAggregateInput | undefined;
    _sum?: PaymentsSumOrderByAggregateInput | undefined;
}
