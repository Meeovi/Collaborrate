import { DashboardjsonAvgAggregate } from "../outputs/DashboardjsonAvgAggregate";
import { DashboardjsonCountAggregate } from "../outputs/DashboardjsonCountAggregate";
import { DashboardjsonMaxAggregate } from "../outputs/DashboardjsonMaxAggregate";
import { DashboardjsonMinAggregate } from "../outputs/DashboardjsonMinAggregate";
import { DashboardjsonSumAggregate } from "../outputs/DashboardjsonSumAggregate";
export declare class DashboardjsonGroupBy {
    id: number;
    name: string;
    url: string | null;
    description: string | null;
    definition: string | null;
    format: string | null;
    _count: DashboardjsonCountAggregate | null;
    _avg: DashboardjsonAvgAggregate | null;
    _sum: DashboardjsonSumAggregate | null;
    _min: DashboardjsonMinAggregate | null;
    _max: DashboardjsonMaxAggregate | null;
}
