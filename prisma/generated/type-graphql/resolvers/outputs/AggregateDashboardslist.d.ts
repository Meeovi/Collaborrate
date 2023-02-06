import { DashboardslistAvgAggregate } from "../outputs/DashboardslistAvgAggregate";
import { DashboardslistCountAggregate } from "../outputs/DashboardslistCountAggregate";
import { DashboardslistMaxAggregate } from "../outputs/DashboardslistMaxAggregate";
import { DashboardslistMinAggregate } from "../outputs/DashboardslistMinAggregate";
import { DashboardslistSumAggregate } from "../outputs/DashboardslistSumAggregate";
export declare class AggregateDashboardslist {
    _count: DashboardslistCountAggregate | null;
    _avg: DashboardslistAvgAggregate | null;
    _sum: DashboardslistSumAggregate | null;
    _min: DashboardslistMinAggregate | null;
    _max: DashboardslistMaxAggregate | null;
}
