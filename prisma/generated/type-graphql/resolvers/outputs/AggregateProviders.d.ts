import { ProvidersAvgAggregate } from "../outputs/ProvidersAvgAggregate";
import { ProvidersCountAggregate } from "../outputs/ProvidersCountAggregate";
import { ProvidersMaxAggregate } from "../outputs/ProvidersMaxAggregate";
import { ProvidersMinAggregate } from "../outputs/ProvidersMinAggregate";
import { ProvidersSumAggregate } from "../outputs/ProvidersSumAggregate";
export declare class AggregateProviders {
    _count: ProvidersCountAggregate | null;
    _avg: ProvidersAvgAggregate | null;
    _sum: ProvidersSumAggregate | null;
    _min: ProvidersMinAggregate | null;
    _max: ProvidersMaxAggregate | null;
}
