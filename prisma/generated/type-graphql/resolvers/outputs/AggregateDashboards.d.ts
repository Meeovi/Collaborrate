import { DashboardsAvgAggregate } from "../outputs/DashboardsAvgAggregate";
import { DashboardsCountAggregate } from "../outputs/DashboardsCountAggregate";
import { DashboardsMaxAggregate } from "../outputs/DashboardsMaxAggregate";
import { DashboardsMinAggregate } from "../outputs/DashboardsMinAggregate";
import { DashboardsSumAggregate } from "../outputs/DashboardsSumAggregate";
export declare class AggregateDashboards {
    _count: DashboardsCountAggregate | null;
    _avg: DashboardsAvgAggregate | null;
    _sum: DashboardsSumAggregate | null;
    _min: DashboardsMinAggregate | null;
    _max: DashboardsMaxAggregate | null;
}
