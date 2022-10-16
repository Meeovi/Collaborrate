import { CasesAvgAggregate } from "../outputs/CasesAvgAggregate";
import { CasesCountAggregate } from "../outputs/CasesCountAggregate";
import { CasesMaxAggregate } from "../outputs/CasesMaxAggregate";
import { CasesMinAggregate } from "../outputs/CasesMinAggregate";
import { CasesSumAggregate } from "../outputs/CasesSumAggregate";
export declare class CasesGroupBy {
    id: bigint;
    created_at: Date | null;
    case_number: number | null;
    state: string | null;
    type: string | null;
    subject: string | null;
    description: string | null;
    resolution: string | null;
    priority: string | null;
    status: string | null;
    account_name: string | null;
    assigned_to: string | null;
    date_modified: Date | null;
    _count: CasesCountAggregate | null;
    _avg: CasesAvgAggregate | null;
    _sum: CasesSumAggregate | null;
    _min: CasesMinAggregate | null;
    _max: CasesMaxAggregate | null;
}
