import { ChecklistAvgAggregate } from "../outputs/ChecklistAvgAggregate";
import { ChecklistCountAggregate } from "../outputs/ChecklistCountAggregate";
import { ChecklistMaxAggregate } from "../outputs/ChecklistMaxAggregate";
import { ChecklistMinAggregate } from "../outputs/ChecklistMinAggregate";
import { ChecklistSumAggregate } from "../outputs/ChecklistSumAggregate";
export declare class ChecklistGroupBy {
    id: bigint;
    created_at: Date | null;
    username: string | null;
    location: string | null;
    regional_manager: string | null;
    manager: string | null;
    description: string | null;
    ticket: string | null;
    project: string | null;
    region: string | null;
    country: string | null;
    media: string | null;
    prod_id: string | null;
    trainings: string | null;
    task: string | null;
    type: string | null;
    _count: ChecklistCountAggregate | null;
    _avg: ChecklistAvgAggregate | null;
    _sum: ChecklistSumAggregate | null;
    _min: ChecklistMinAggregate | null;
    _max: ChecklistMaxAggregate | null;
}
