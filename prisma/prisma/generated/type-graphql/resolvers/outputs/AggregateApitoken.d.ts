import { ApitokenAvgAggregate } from "../outputs/ApitokenAvgAggregate";
import { ApitokenCountAggregate } from "../outputs/ApitokenCountAggregate";
import { ApitokenMaxAggregate } from "../outputs/ApitokenMaxAggregate";
import { ApitokenMinAggregate } from "../outputs/ApitokenMinAggregate";
import { ApitokenSumAggregate } from "../outputs/ApitokenSumAggregate";
export declare class AggregateApitoken {
    _count: ApitokenCountAggregate | null;
    _avg: ApitokenAvgAggregate | null;
    _sum: ApitokenSumAggregate | null;
    _min: ApitokenMinAggregate | null;
    _max: ApitokenMaxAggregate | null;
}
