import { RewardsAvgAggregate } from "../outputs/RewardsAvgAggregate";
import { RewardsCountAggregate } from "../outputs/RewardsCountAggregate";
import { RewardsMaxAggregate } from "../outputs/RewardsMaxAggregate";
import { RewardsMinAggregate } from "../outputs/RewardsMinAggregate";
import { RewardsSumAggregate } from "../outputs/RewardsSumAggregate";
export declare class AggregateRewards {
    _count: RewardsCountAggregate | null;
    _avg: RewardsAvgAggregate | null;
    _sum: RewardsSumAggregate | null;
    _min: RewardsMinAggregate | null;
    _max: RewardsMaxAggregate | null;
}
