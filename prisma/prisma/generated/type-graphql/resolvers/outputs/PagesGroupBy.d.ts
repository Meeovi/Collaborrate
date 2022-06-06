import { PagesAvgAggregate } from "../outputs/PagesAvgAggregate";
import { PagesCountAggregate } from "../outputs/PagesCountAggregate";
import { PagesMaxAggregate } from "../outputs/PagesMaxAggregate";
import { PagesMinAggregate } from "../outputs/PagesMinAggregate";
import { PagesSumAggregate } from "../outputs/PagesSumAggregate";
export declare class PagesGroupBy {
    id: number;
    enable_page: boolean | null;
    title: string;
    content_title: string | null;
    content: string | null;
    url_key: string | null;
    meta_title: string | null;
    meta_keywords: string | null;
    meta_description: string | null;
    _count: PagesCountAggregate | null;
    _avg: PagesAvgAggregate | null;
    _sum: PagesSumAggregate | null;
    _min: PagesMinAggregate | null;
    _max: PagesMaxAggregate | null;
}
