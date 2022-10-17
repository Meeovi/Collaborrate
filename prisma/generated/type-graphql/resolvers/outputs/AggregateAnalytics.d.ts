import { AnalyticsAvgAggregate } from "../outputs/AnalyticsAvgAggregate";
import { AnalyticsCountAggregate } from "../outputs/AnalyticsCountAggregate";
import { AnalyticsMaxAggregate } from "../outputs/AnalyticsMaxAggregate";
import { AnalyticsMinAggregate } from "../outputs/AnalyticsMinAggregate";
import { AnalyticsSumAggregate } from "../outputs/AnalyticsSumAggregate";
export declare class AggregateAnalytics {
    _count: AnalyticsCountAggregate | null;
    _avg: AnalyticsAvgAggregate | null;
    _sum: AnalyticsSumAggregate | null;
    _min: AnalyticsMinAggregate | null;
    _max: AnalyticsMaxAggregate | null;
}
