import { PagesAvgAggregate } from "../outputs/PagesAvgAggregate";
import { PagesCountAggregate } from "../outputs/PagesCountAggregate";
import { PagesMaxAggregate } from "../outputs/PagesMaxAggregate";
import { PagesMinAggregate } from "../outputs/PagesMinAggregate";
import { PagesSumAggregate } from "../outputs/PagesSumAggregate";
export declare class AggregatePages {
    _count: PagesCountAggregate | null;
    _avg: PagesAvgAggregate | null;
    _sum: PagesSumAggregate | null;
    _min: PagesMinAggregate | null;
    _max: PagesMaxAggregate | null;
}
