import { DashboardgraphqlAvgAggregate } from "../outputs/DashboardgraphqlAvgAggregate";
import { DashboardgraphqlCountAggregate } from "../outputs/DashboardgraphqlCountAggregate";
import { DashboardgraphqlMaxAggregate } from "../outputs/DashboardgraphqlMaxAggregate";
import { DashboardgraphqlMinAggregate } from "../outputs/DashboardgraphqlMinAggregate";
import { DashboardgraphqlSumAggregate } from "../outputs/DashboardgraphqlSumAggregate";
export declare class AggregateDashboardgraphql {
    _count: DashboardgraphqlCountAggregate | null;
    _avg: DashboardgraphqlAvgAggregate | null;
    _sum: DashboardgraphqlSumAggregate | null;
    _min: DashboardgraphqlMinAggregate | null;
    _max: DashboardgraphqlMaxAggregate | null;
}
