import { OpportunitiesAvgAggregate } from "../outputs/OpportunitiesAvgAggregate";
import { OpportunitiesCountAggregate } from "../outputs/OpportunitiesCountAggregate";
import { OpportunitiesMaxAggregate } from "../outputs/OpportunitiesMaxAggregate";
import { OpportunitiesMinAggregate } from "../outputs/OpportunitiesMinAggregate";
import { OpportunitiesSumAggregate } from "../outputs/OpportunitiesSumAggregate";
export declare class OpportunitiesGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    amount: string | null;
    sales_stage: string | null;
    currency: string | null;
    probability: string | null;
    next_step: string | null;
    description: string | null;
    assigned_to: string | null;
    lead_source: string | null;
    campaign: string | null;
    type: string | null;
    account_name: string | null;
    expected_close_date: string | null;
    _count: OpportunitiesCountAggregate | null;
    _avg: OpportunitiesAvgAggregate | null;
    _sum: OpportunitiesSumAggregate | null;
    _min: OpportunitiesMinAggregate | null;
    _max: OpportunitiesMaxAggregate | null;
}
