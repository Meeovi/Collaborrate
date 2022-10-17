import { PollsAvgAggregate } from "../outputs/PollsAvgAggregate";
import { PollsCountAggregate } from "../outputs/PollsCountAggregate";
import { PollsMaxAggregate } from "../outputs/PollsMaxAggregate";
import { PollsMinAggregate } from "../outputs/PollsMinAggregate";
import { PollsSumAggregate } from "../outputs/PollsSumAggregate";
export declare class AggregatePolls {
    _count: PollsCountAggregate | null;
    _avg: PollsAvgAggregate | null;
    _sum: PollsSumAggregate | null;
    _min: PollsMinAggregate | null;
    _max: PollsMaxAggregate | null;
}
