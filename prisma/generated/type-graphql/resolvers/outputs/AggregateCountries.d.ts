import { CountriesAvgAggregate } from "../outputs/CountriesAvgAggregate";
import { CountriesCountAggregate } from "../outputs/CountriesCountAggregate";
import { CountriesMaxAggregate } from "../outputs/CountriesMaxAggregate";
import { CountriesMinAggregate } from "../outputs/CountriesMinAggregate";
import { CountriesSumAggregate } from "../outputs/CountriesSumAggregate";
export declare class AggregateCountries {
    _count: CountriesCountAggregate | null;
    _avg: CountriesAvgAggregate | null;
    _sum: CountriesSumAggregate | null;
    _min: CountriesMinAggregate | null;
    _max: CountriesMaxAggregate | null;
}
