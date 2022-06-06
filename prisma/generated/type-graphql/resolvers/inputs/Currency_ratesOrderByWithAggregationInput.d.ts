import { Currency_ratesAvgOrderByAggregateInput } from "../inputs/Currency_ratesAvgOrderByAggregateInput";
import { Currency_ratesCountOrderByAggregateInput } from "../inputs/Currency_ratesCountOrderByAggregateInput";
import { Currency_ratesMaxOrderByAggregateInput } from "../inputs/Currency_ratesMaxOrderByAggregateInput";
import { Currency_ratesMinOrderByAggregateInput } from "../inputs/Currency_ratesMinOrderByAggregateInput";
import { Currency_ratesSumOrderByAggregateInput } from "../inputs/Currency_ratesSumOrderByAggregateInput";
export declare class Currency_ratesOrderByWithAggregationInput {
    import_service?: "asc" | "desc" | undefined;
    usd?: "asc" | "desc" | undefined;
    _count?: Currency_ratesCountOrderByAggregateInput | undefined;
    _avg?: Currency_ratesAvgOrderByAggregateInput | undefined;
    _max?: Currency_ratesMaxOrderByAggregateInput | undefined;
    _min?: Currency_ratesMinOrderByAggregateInput | undefined;
    _sum?: Currency_ratesSumOrderByAggregateInput | undefined;
}
