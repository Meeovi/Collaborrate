import { WebsitesAvgAggregate } from "../outputs/WebsitesAvgAggregate";
import { WebsitesCountAggregate } from "../outputs/WebsitesCountAggregate";
import { WebsitesMaxAggregate } from "../outputs/WebsitesMaxAggregate";
import { WebsitesMinAggregate } from "../outputs/WebsitesMinAggregate";
import { WebsitesSumAggregate } from "../outputs/WebsitesSumAggregate";
export declare class WebsitesGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    url: string | null;
    shop: string | null;
    store: string | null;
    category: string | null;
    themes: string | null;
    image: string | null;
    _count: WebsitesCountAggregate | null;
    _avg: WebsitesAvgAggregate | null;
    _sum: WebsitesSumAggregate | null;
    _min: WebsitesMinAggregate | null;
    _max: WebsitesMaxAggregate | null;
}
