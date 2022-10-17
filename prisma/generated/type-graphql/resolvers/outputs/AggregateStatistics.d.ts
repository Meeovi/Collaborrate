import { StatisticsAvgAggregate } from "../outputs/StatisticsAvgAggregate";
import { StatisticsCountAggregate } from "../outputs/StatisticsCountAggregate";
import { StatisticsMaxAggregate } from "../outputs/StatisticsMaxAggregate";
import { StatisticsMinAggregate } from "../outputs/StatisticsMinAggregate";
import { StatisticsSumAggregate } from "../outputs/StatisticsSumAggregate";
export declare class AggregateStatistics {
    _count: StatisticsCountAggregate | null;
    _avg: StatisticsAvgAggregate | null;
    _sum: StatisticsSumAggregate | null;
    _min: StatisticsMinAggregate | null;
    _max: StatisticsMaxAggregate | null;
}
