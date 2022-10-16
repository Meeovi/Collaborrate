import { ProvidersAvgAggregate } from "../outputs/ProvidersAvgAggregate";
import { ProvidersCountAggregate } from "../outputs/ProvidersCountAggregate";
import { ProvidersMaxAggregate } from "../outputs/ProvidersMaxAggregate";
import { ProvidersMinAggregate } from "../outputs/ProvidersMinAggregate";
import { ProvidersSumAggregate } from "../outputs/ProvidersSumAggregate";
export declare class ProvidersGroupBy {
    id: bigint;
    created_at: Date | null;
    client_id: string | null;
    client_secret: string | null;
    host_uri: string | null;
    redirect_url: string | null;
    redirect_url_app: string | null;
    icon: string | null;
    name: string;
    active: string | null;
    _count: ProvidersCountAggregate | null;
    _avg: ProvidersAvgAggregate | null;
    _sum: ProvidersSumAggregate | null;
    _min: ProvidersMinAggregate | null;
    _max: ProvidersMaxAggregate | null;
}
