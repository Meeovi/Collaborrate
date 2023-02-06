import { CitiesAvgAggregate } from "../outputs/CitiesAvgAggregate";
import { CitiesCountAggregate } from "../outputs/CitiesCountAggregate";
import { CitiesMaxAggregate } from "../outputs/CitiesMaxAggregate";
import { CitiesMinAggregate } from "../outputs/CitiesMinAggregate";
import { CitiesSumAggregate } from "../outputs/CitiesSumAggregate";
export declare class AggregateCities {
    _count: CitiesCountAggregate | null;
    _avg: CitiesAvgAggregate | null;
    _sum: CitiesSumAggregate | null;
    _min: CitiesMinAggregate | null;
    _max: CitiesMaxAggregate | null;
}
