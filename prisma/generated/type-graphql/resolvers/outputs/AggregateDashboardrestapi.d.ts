import { DashboardrestapiAvgAggregate } from "../outputs/DashboardrestapiAvgAggregate";
import { DashboardrestapiCountAggregate } from "../outputs/DashboardrestapiCountAggregate";
import { DashboardrestapiMaxAggregate } from "../outputs/DashboardrestapiMaxAggregate";
import { DashboardrestapiMinAggregate } from "../outputs/DashboardrestapiMinAggregate";
import { DashboardrestapiSumAggregate } from "../outputs/DashboardrestapiSumAggregate";
export declare class AggregateDashboardrestapi {
    _count: DashboardrestapiCountAggregate | null;
    _avg: DashboardrestapiAvgAggregate | null;
    _sum: DashboardrestapiSumAggregate | null;
    _min: DashboardrestapiMinAggregate | null;
    _max: DashboardrestapiMaxAggregate | null;
}
