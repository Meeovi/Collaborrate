import { VisitsAvgAggregate } from "../outputs/VisitsAvgAggregate";
import { VisitsCountAggregate } from "../outputs/VisitsCountAggregate";
import { VisitsMaxAggregate } from "../outputs/VisitsMaxAggregate";
import { VisitsMinAggregate } from "../outputs/VisitsMinAggregate";
import { VisitsSumAggregate } from "../outputs/VisitsSumAggregate";
export declare class VisitsGroupBy {
    id: bigint;
    created_at: Date | null;
    location: string | null;
    username: string | null;
    reason: string | null;
    content: string | null;
    emergency: string | null;
    start_date: string | null;
    end_date: string | null;
    task: string | null;
    meeting: string | null;
    _count: VisitsCountAggregate | null;
    _avg: VisitsAvgAggregate | null;
    _sum: VisitsSumAggregate | null;
    _min: VisitsMinAggregate | null;
    _max: VisitsMaxAggregate | null;
}
