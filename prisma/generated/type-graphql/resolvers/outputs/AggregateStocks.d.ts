import { StocksAvgAggregate } from "../outputs/StocksAvgAggregate";
import { StocksCountAggregate } from "../outputs/StocksCountAggregate";
import { StocksMaxAggregate } from "../outputs/StocksMaxAggregate";
import { StocksMinAggregate } from "../outputs/StocksMinAggregate";
import { StocksSumAggregate } from "../outputs/StocksSumAggregate";
export declare class AggregateStocks {
    _count: StocksCountAggregate | null;
    _avg: StocksAvgAggregate | null;
    _sum: StocksSumAggregate | null;
    _min: StocksMinAggregate | null;
    _max: StocksMaxAggregate | null;
}
