import { IntegrationsAvgAggregate } from "../outputs/IntegrationsAvgAggregate";
import { IntegrationsCountAggregate } from "../outputs/IntegrationsCountAggregate";
import { IntegrationsMaxAggregate } from "../outputs/IntegrationsMaxAggregate";
import { IntegrationsMinAggregate } from "../outputs/IntegrationsMinAggregate";
import { IntegrationsSumAggregate } from "../outputs/IntegrationsSumAggregate";
export declare class IntegrationsGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    content: string | null;
    media: string | null;
    location: string | null;
    category: string | null;
    _count: IntegrationsCountAggregate | null;
    _avg: IntegrationsAvgAggregate | null;
    _sum: IntegrationsSumAggregate | null;
    _min: IntegrationsMinAggregate | null;
    _max: IntegrationsMaxAggregate | null;
}
