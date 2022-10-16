import { ReportsAvgAggregate } from "../outputs/ReportsAvgAggregate";
import { ReportsCountAggregate } from "../outputs/ReportsCountAggregate";
import { ReportsMaxAggregate } from "../outputs/ReportsMaxAggregate";
import { ReportsMinAggregate } from "../outputs/ReportsMinAggregate";
import { ReportsSumAggregate } from "../outputs/ReportsSumAggregate";
export declare class AggregateReports {
    _count: ReportsCountAggregate | null;
    _avg: ReportsAvgAggregate | null;
    _sum: ReportsSumAggregate | null;
    _min: ReportsMinAggregate | null;
    _max: ReportsMaxAggregate | null;
}
