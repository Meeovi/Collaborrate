import { OpportunitiesAvgAggregate } from "../outputs/OpportunitiesAvgAggregate";
import { OpportunitiesCountAggregate } from "../outputs/OpportunitiesCountAggregate";
import { OpportunitiesMaxAggregate } from "../outputs/OpportunitiesMaxAggregate";
import { OpportunitiesMinAggregate } from "../outputs/OpportunitiesMinAggregate";
import { OpportunitiesSumAggregate } from "../outputs/OpportunitiesSumAggregate";
export declare class AggregateOpportunities {
    _count: OpportunitiesCountAggregate | null;
    _avg: OpportunitiesAvgAggregate | null;
    _sum: OpportunitiesSumAggregate | null;
    _min: OpportunitiesMinAggregate | null;
    _max: OpportunitiesMaxAggregate | null;
}
