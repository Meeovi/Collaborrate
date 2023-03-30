import { DashboardslidesAvgAggregate } from "../outputs/DashboardslidesAvgAggregate";
import { DashboardslidesCountAggregate } from "../outputs/DashboardslidesCountAggregate";
import { DashboardslidesMaxAggregate } from "../outputs/DashboardslidesMaxAggregate";
import { DashboardslidesMinAggregate } from "../outputs/DashboardslidesMinAggregate";
import { DashboardslidesSumAggregate } from "../outputs/DashboardslidesSumAggregate";
export declare class DashboardslidesGroupBy {
    id: number;
    name: string;
    categories: string | null;
    media: string | null;
    description: string | null;
    _count: DashboardslidesCountAggregate | null;
    _avg: DashboardslidesAvgAggregate | null;
    _sum: DashboardslidesSumAggregate | null;
    _min: DashboardslidesMinAggregate | null;
    _max: DashboardslidesMaxAggregate | null;
}
