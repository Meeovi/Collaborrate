import { ImportmAvgAggregate } from "../outputs/ImportmAvgAggregate";
import { ImportmCountAggregate } from "../outputs/ImportmCountAggregate";
import { ImportmMaxAggregate } from "../outputs/ImportmMaxAggregate";
import { ImportmMinAggregate } from "../outputs/ImportmMinAggregate";
import { ImportmSumAggregate } from "../outputs/ImportmSumAggregate";
export declare class AggregateImportm {
    _count: ImportmCountAggregate | null;
    _avg: ImportmAvgAggregate | null;
    _sum: ImportmSumAggregate | null;
    _min: ImportmMinAggregate | null;
    _max: ImportmMaxAggregate | null;
}
