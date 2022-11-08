import { DeepdiveAvgAggregate } from "../outputs/DeepdiveAvgAggregate";
import { DeepdiveCountAggregate } from "../outputs/DeepdiveCountAggregate";
import { DeepdiveMaxAggregate } from "../outputs/DeepdiveMaxAggregate";
import { DeepdiveMinAggregate } from "../outputs/DeepdiveMinAggregate";
import { DeepdiveSumAggregate } from "../outputs/DeepdiveSumAggregate";
export declare class DeepdiveGroupBy {
    id: bigint;
    created_at: Date | null;
    end_date: string | null;
    content: string | null;
    attendees: string | null;
    login: string | null;
    start_date: string | null;
    whid: string | null;
    _count: DeepdiveCountAggregate | null;
    _avg: DeepdiveAvgAggregate | null;
    _sum: DeepdiveSumAggregate | null;
    _min: DeepdiveMinAggregate | null;
    _max: DeepdiveMaxAggregate | null;
}
