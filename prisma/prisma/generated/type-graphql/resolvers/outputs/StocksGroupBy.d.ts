import { StocksAvgAggregate } from "../outputs/StocksAvgAggregate";
import { StocksCountAggregate } from "../outputs/StocksCountAggregate";
import { StocksMaxAggregate } from "../outputs/StocksMaxAggregate";
import { StocksMinAggregate } from "../outputs/StocksMinAggregate";
import { StocksSumAggregate } from "../outputs/StocksSumAggregate";
export declare class StocksGroupBy {
    id: number;
    name: string;
    enabled: boolean | null;
    description: string | null;
    website: string | null;
    sources: string | null;
    _count: StocksCountAggregate | null;
    _avg: StocksAvgAggregate | null;
    _sum: StocksSumAggregate | null;
    _min: StocksMinAggregate | null;
    _max: StocksMaxAggregate | null;
}
