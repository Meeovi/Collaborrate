import { IntegrationsAvgAggregate } from "../outputs/IntegrationsAvgAggregate";
import { IntegrationsCountAggregate } from "../outputs/IntegrationsCountAggregate";
import { IntegrationsMaxAggregate } from "../outputs/IntegrationsMaxAggregate";
import { IntegrationsMinAggregate } from "../outputs/IntegrationsMinAggregate";
import { IntegrationsSumAggregate } from "../outputs/IntegrationsSumAggregate";
export declare class AggregateIntegrations {
    _count: IntegrationsCountAggregate | null;
    _avg: IntegrationsAvgAggregate | null;
    _sum: IntegrationsSumAggregate | null;
    _min: IntegrationsMinAggregate | null;
    _max: IntegrationsMaxAggregate | null;
}
