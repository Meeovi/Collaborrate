import { InternalizationAvgAggregate } from "../outputs/InternalizationAvgAggregate";
import { InternalizationCountAggregate } from "../outputs/InternalizationCountAggregate";
import { InternalizationMaxAggregate } from "../outputs/InternalizationMaxAggregate";
import { InternalizationMinAggregate } from "../outputs/InternalizationMinAggregate";
import { InternalizationSumAggregate } from "../outputs/InternalizationSumAggregate";
export declare class InternalizationGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    region: string | null;
    description: string | null;
    default: string | null;
    website: string | null;
    _count: InternalizationCountAggregate | null;
    _avg: InternalizationAvgAggregate | null;
    _sum: InternalizationSumAggregate | null;
    _min: InternalizationMinAggregate | null;
    _max: InternalizationMaxAggregate | null;
}
