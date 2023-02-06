import { CurrenciesAvgAggregate } from "../outputs/CurrenciesAvgAggregate";
import { CurrenciesCountAggregate } from "../outputs/CurrenciesCountAggregate";
import { CurrenciesMaxAggregate } from "../outputs/CurrenciesMaxAggregate";
import { CurrenciesMinAggregate } from "../outputs/CurrenciesMinAggregate";
import { CurrenciesSumAggregate } from "../outputs/CurrenciesSumAggregate";
export declare class AggregateCurrencies {
    _count: CurrenciesCountAggregate | null;
    _avg: CurrenciesAvgAggregate | null;
    _sum: CurrenciesSumAggregate | null;
    _min: CurrenciesMinAggregate | null;
    _max: CurrenciesMaxAggregate | null;
}
