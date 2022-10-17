import { LeadsAvgAggregate } from "../outputs/LeadsAvgAggregate";
import { LeadsCountAggregate } from "../outputs/LeadsCountAggregate";
import { LeadsMaxAggregate } from "../outputs/LeadsMaxAggregate";
import { LeadsMinAggregate } from "../outputs/LeadsMinAggregate";
import { LeadsSumAggregate } from "../outputs/LeadsSumAggregate";
export declare class AggregateLeads {
    _count: LeadsCountAggregate | null;
    _avg: LeadsAvgAggregate | null;
    _sum: LeadsSumAggregate | null;
    _min: LeadsMinAggregate | null;
    _max: LeadsMaxAggregate | null;
}
