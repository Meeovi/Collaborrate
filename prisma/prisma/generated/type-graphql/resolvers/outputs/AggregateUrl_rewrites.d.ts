import { Url_rewritesAvgAggregate } from "../outputs/Url_rewritesAvgAggregate";
import { Url_rewritesCountAggregate } from "../outputs/Url_rewritesCountAggregate";
import { Url_rewritesMaxAggregate } from "../outputs/Url_rewritesMaxAggregate";
import { Url_rewritesMinAggregate } from "../outputs/Url_rewritesMinAggregate";
import { Url_rewritesSumAggregate } from "../outputs/Url_rewritesSumAggregate";
export declare class AggregateUrl_rewrites {
    _count: Url_rewritesCountAggregate | null;
    _avg: Url_rewritesAvgAggregate | null;
    _sum: Url_rewritesSumAggregate | null;
    _min: Url_rewritesMinAggregate | null;
    _max: Url_rewritesMaxAggregate | null;
}
