import { WebhooksAvgAggregate } from "../outputs/WebhooksAvgAggregate";
import { WebhooksCountAggregate } from "../outputs/WebhooksCountAggregate";
import { WebhooksMaxAggregate } from "../outputs/WebhooksMaxAggregate";
import { WebhooksMinAggregate } from "../outputs/WebhooksMinAggregate";
import { WebhooksSumAggregate } from "../outputs/WebhooksSumAggregate";
export declare class AggregateWebhooks {
    _count: WebhooksCountAggregate | null;
    _avg: WebhooksAvgAggregate | null;
    _sum: WebhooksSumAggregate | null;
    _min: WebhooksMinAggregate | null;
    _max: WebhooksMaxAggregate | null;
}
