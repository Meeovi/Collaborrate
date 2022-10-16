import { StocksAvgOrderByAggregateInput } from "../inputs/StocksAvgOrderByAggregateInput";
import { StocksCountOrderByAggregateInput } from "../inputs/StocksCountOrderByAggregateInput";
import { StocksMaxOrderByAggregateInput } from "../inputs/StocksMaxOrderByAggregateInput";
import { StocksMinOrderByAggregateInput } from "../inputs/StocksMinOrderByAggregateInput";
import { StocksSumOrderByAggregateInput } from "../inputs/StocksSumOrderByAggregateInput";
export declare class StocksOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    enabled?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    website?: "asc" | "desc" | undefined;
    sources?: "asc" | "desc" | undefined;
    _count?: StocksCountOrderByAggregateInput | undefined;
    _avg?: StocksAvgOrderByAggregateInput | undefined;
    _max?: StocksMaxOrderByAggregateInput | undefined;
    _min?: StocksMinOrderByAggregateInput | undefined;
    _sum?: StocksSumOrderByAggregateInput | undefined;
}
