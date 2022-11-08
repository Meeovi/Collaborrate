import { EndofshiftAvgAggregate } from "../outputs/EndofshiftAvgAggregate";
import { EndofshiftCountAggregate } from "../outputs/EndofshiftCountAggregate";
import { EndofshiftMaxAggregate } from "../outputs/EndofshiftMaxAggregate";
import { EndofshiftMinAggregate } from "../outputs/EndofshiftMinAggregate";
import { EndofshiftSumAggregate } from "../outputs/EndofshiftSumAggregate";
export declare class EndofshiftGroupBy {
    id: bigint;
    created_at: Date | null;
    content: string | null;
    login: string | null;
    mcms: string | null;
    next_shift: string | null;
    projects: string | null;
    tickets: string | null;
    whid: string | null;
    _count: EndofshiftCountAggregate | null;
    _avg: EndofshiftAvgAggregate | null;
    _sum: EndofshiftSumAggregate | null;
    _min: EndofshiftMinAggregate | null;
    _max: EndofshiftMaxAggregate | null;
}
