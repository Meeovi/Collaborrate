import { CurrenciesAvgOrderByAggregateInput } from "../inputs/CurrenciesAvgOrderByAggregateInput";
import { CurrenciesCountOrderByAggregateInput } from "../inputs/CurrenciesCountOrderByAggregateInput";
import { CurrenciesMaxOrderByAggregateInput } from "../inputs/CurrenciesMaxOrderByAggregateInput";
import { CurrenciesMinOrderByAggregateInput } from "../inputs/CurrenciesMinOrderByAggregateInput";
import { CurrenciesSumOrderByAggregateInput } from "../inputs/CurrenciesSumOrderByAggregateInput";
export declare class CurrenciesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    code?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    region?: "asc" | "desc" | undefined;
    symbol?: "asc" | "desc" | undefined;
    useStandard?: "asc" | "desc" | undefined;
    _count?: CurrenciesCountOrderByAggregateInput | undefined;
    _avg?: CurrenciesAvgOrderByAggregateInput | undefined;
    _max?: CurrenciesMaxOrderByAggregateInput | undefined;
    _min?: CurrenciesMinOrderByAggregateInput | undefined;
    _sum?: CurrenciesSumOrderByAggregateInput | undefined;
}
