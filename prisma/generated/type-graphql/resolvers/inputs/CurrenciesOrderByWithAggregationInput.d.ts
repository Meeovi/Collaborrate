import { CurrenciesAvgOrderByAggregateInput } from "../inputs/CurrenciesAvgOrderByAggregateInput";
import { CurrenciesCountOrderByAggregateInput } from "../inputs/CurrenciesCountOrderByAggregateInput";
import { CurrenciesMaxOrderByAggregateInput } from "../inputs/CurrenciesMaxOrderByAggregateInput";
import { CurrenciesMinOrderByAggregateInput } from "../inputs/CurrenciesMinOrderByAggregateInput";
import { CurrenciesSumOrderByAggregateInput } from "../inputs/CurrenciesSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class CurrenciesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    code?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    region?: SortOrderInput | undefined;
    symbol?: SortOrderInput | undefined;
    useStandard?: SortOrderInput | undefined;
    _count?: CurrenciesCountOrderByAggregateInput | undefined;
    _avg?: CurrenciesAvgOrderByAggregateInput | undefined;
    _max?: CurrenciesMaxOrderByAggregateInput | undefined;
    _min?: CurrenciesMinOrderByAggregateInput | undefined;
    _sum?: CurrenciesSumOrderByAggregateInput | undefined;
}
