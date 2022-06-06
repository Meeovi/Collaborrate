import { TagsAvgAggregate } from "../outputs/TagsAvgAggregate";
import { TagsCountAggregate } from "../outputs/TagsCountAggregate";
import { TagsMaxAggregate } from "../outputs/TagsMaxAggregate";
import { TagsMinAggregate } from "../outputs/TagsMinAggregate";
import { TagsSumAggregate } from "../outputs/TagsSumAggregate";
export declare class AggregateTags {
    _count: TagsCountAggregate | null;
    _avg: TagsAvgAggregate | null;
    _sum: TagsSumAggregate | null;
    _min: TagsMinAggregate | null;
    _max: TagsMaxAggregate | null;
}
