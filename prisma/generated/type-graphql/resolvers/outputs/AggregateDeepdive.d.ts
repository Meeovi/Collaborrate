import { DeepdiveAvgAggregate } from "../outputs/DeepdiveAvgAggregate";
import { DeepdiveCountAggregate } from "../outputs/DeepdiveCountAggregate";
import { DeepdiveMaxAggregate } from "../outputs/DeepdiveMaxAggregate";
import { DeepdiveMinAggregate } from "../outputs/DeepdiveMinAggregate";
import { DeepdiveSumAggregate } from "../outputs/DeepdiveSumAggregate";
export declare class AggregateDeepdive {
    _count: DeepdiveCountAggregate | null;
    _avg: DeepdiveAvgAggregate | null;
    _sum: DeepdiveSumAggregate | null;
    _min: DeepdiveMinAggregate | null;
    _max: DeepdiveMaxAggregate | null;
}
