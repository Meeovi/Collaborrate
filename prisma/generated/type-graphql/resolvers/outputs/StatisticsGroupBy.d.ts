import { StatisticsAvgAggregate } from "../outputs/StatisticsAvgAggregate";
import { StatisticsCountAggregate } from "../outputs/StatisticsCountAggregate";
import { StatisticsMaxAggregate } from "../outputs/StatisticsMaxAggregate";
import { StatisticsMinAggregate } from "../outputs/StatisticsMinAggregate";
import { StatisticsSumAggregate } from "../outputs/StatisticsSumAggregate";
export declare class StatisticsGroupBy {
    id: number;
    name: string;
    excerpt: string | null;
    description: string | null;
    image: string | null;
    published: Date | null;
    special_offers: string | null;
    reports: string | null;
    rewards: string | null;
    coupons: string | null;
    expiration: Date | null;
    categories: string | null;
    articles: string | null;
    products: string | null;
    customers: string | null;
    users: string | null;
    _count: StatisticsCountAggregate | null;
    _avg: StatisticsAvgAggregate | null;
    _sum: StatisticsSumAggregate | null;
    _min: StatisticsMinAggregate | null;
    _max: StatisticsMaxAggregate | null;
}
