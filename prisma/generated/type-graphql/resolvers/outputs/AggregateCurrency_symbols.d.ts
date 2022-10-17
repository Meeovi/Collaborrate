import { Currency_symbolsAvgAggregate } from "../outputs/Currency_symbolsAvgAggregate";
import { Currency_symbolsCountAggregate } from "../outputs/Currency_symbolsCountAggregate";
import { Currency_symbolsMaxAggregate } from "../outputs/Currency_symbolsMaxAggregate";
import { Currency_symbolsMinAggregate } from "../outputs/Currency_symbolsMinAggregate";
import { Currency_symbolsSumAggregate } from "../outputs/Currency_symbolsSumAggregate";
export declare class AggregateCurrency_symbols {
    _count: Currency_symbolsCountAggregate | null;
    _avg: Currency_symbolsAvgAggregate | null;
    _sum: Currency_symbolsSumAggregate | null;
    _min: Currency_symbolsMinAggregate | null;
    _max: Currency_symbolsMaxAggregate | null;
}
