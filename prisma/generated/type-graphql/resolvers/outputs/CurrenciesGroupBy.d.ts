import { CurrenciesAvgAggregate } from "../outputs/CurrenciesAvgAggregate";
import { CurrenciesCountAggregate } from "../outputs/CurrenciesCountAggregate";
import { CurrenciesMaxAggregate } from "../outputs/CurrenciesMaxAggregate";
import { CurrenciesMinAggregate } from "../outputs/CurrenciesMinAggregate";
import { CurrenciesSumAggregate } from "../outputs/CurrenciesSumAggregate";
export declare class CurrenciesGroupBy {
    id: bigint;
    created_at: Date | null;
    code: string | null;
    name: string | null;
    region: string | null;
    symbol: string | null;
    useStandard: string | null;
    _count: CurrenciesCountAggregate | null;
    _avg: CurrenciesAvgAggregate | null;
    _sum: CurrenciesSumAggregate | null;
    _min: CurrenciesMinAggregate | null;
    _max: CurrenciesMaxAggregate | null;
}
