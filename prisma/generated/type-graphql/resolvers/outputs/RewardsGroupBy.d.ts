import { RewardsAvgAggregate } from "../outputs/RewardsAvgAggregate";
import { RewardsCountAggregate } from "../outputs/RewardsCountAggregate";
import { RewardsMaxAggregate } from "../outputs/RewardsMaxAggregate";
import { RewardsMinAggregate } from "../outputs/RewardsMinAggregate";
import { RewardsSumAggregate } from "../outputs/RewardsSumAggregate";
export declare class RewardsGroupBy {
    id: number;
    name: string;
    slug: string | null;
    level: string | null;
    created_at: Date | null;
    coupons: string | null;
    expiration: string | null;
    categories: string | null;
    articles: string | null;
    products: string | null;
    customers: string | null;
    users: string | null;
    _count: RewardsCountAggregate | null;
    _avg: RewardsAvgAggregate | null;
    _sum: RewardsSumAggregate | null;
    _min: RewardsMinAggregate | null;
    _max: RewardsMaxAggregate | null;
}
