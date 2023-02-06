import { WebhooksAvgAggregate } from "../outputs/WebhooksAvgAggregate";
import { WebhooksCountAggregate } from "../outputs/WebhooksCountAggregate";
import { WebhooksMaxAggregate } from "../outputs/WebhooksMaxAggregate";
import { WebhooksMinAggregate } from "../outputs/WebhooksMinAggregate";
import { WebhooksSumAggregate } from "../outputs/WebhooksSumAggregate";
export declare class WebhooksGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string;
    url: string;
    headers: string | null;
    create: string | null;
    retrieve: string | null;
    update: string | null;
    delete: string | null;
    publish: string | null;
    unpublish: string | null;
    _count: WebhooksCountAggregate | null;
    _avg: WebhooksAvgAggregate | null;
    _sum: WebhooksSumAggregate | null;
    _min: WebhooksMinAggregate | null;
    _max: WebhooksMaxAggregate | null;
}
