import { InternalizationAvgAggregate } from "../outputs/InternalizationAvgAggregate";
import { InternalizationCountAggregate } from "../outputs/InternalizationCountAggregate";
import { InternalizationMaxAggregate } from "../outputs/InternalizationMaxAggregate";
import { InternalizationMinAggregate } from "../outputs/InternalizationMinAggregate";
import { InternalizationSumAggregate } from "../outputs/InternalizationSumAggregate";
export declare class AggregateInternalization {
    _count: InternalizationCountAggregate | null;
    _avg: InternalizationAvgAggregate | null;
    _sum: InternalizationSumAggregate | null;
    _min: InternalizationMinAggregate | null;
    _max: InternalizationMaxAggregate | null;
}
