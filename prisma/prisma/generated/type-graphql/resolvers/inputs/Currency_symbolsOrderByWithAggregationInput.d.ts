import { Currency_symbolsCountOrderByAggregateInput } from "../inputs/Currency_symbolsCountOrderByAggregateInput";
import { Currency_symbolsMaxOrderByAggregateInput } from "../inputs/Currency_symbolsMaxOrderByAggregateInput";
import { Currency_symbolsMinOrderByAggregateInput } from "../inputs/Currency_symbolsMinOrderByAggregateInput";
export declare class Currency_symbolsOrderByWithAggregationInput {
    symbol?: "asc" | "desc" | undefined;
    use_standard?: "asc" | "desc" | undefined;
    _count?: Currency_symbolsCountOrderByAggregateInput | undefined;
    _max?: Currency_symbolsMaxOrderByAggregateInput | undefined;
    _min?: Currency_symbolsMinOrderByAggregateInput | undefined;
}
