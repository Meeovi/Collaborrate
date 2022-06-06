import { CasesAvgAggregate } from "../outputs/CasesAvgAggregate";
import { CasesCountAggregate } from "../outputs/CasesCountAggregate";
import { CasesMaxAggregate } from "../outputs/CasesMaxAggregate";
import { CasesMinAggregate } from "../outputs/CasesMinAggregate";
import { CasesSumAggregate } from "../outputs/CasesSumAggregate";
export declare class AggregateCases {
    _count: CasesCountAggregate | null;
    _avg: CasesAvgAggregate | null;
    _sum: CasesSumAggregate | null;
    _min: CasesMinAggregate | null;
    _max: CasesMaxAggregate | null;
}
