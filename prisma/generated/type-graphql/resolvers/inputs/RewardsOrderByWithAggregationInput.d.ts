import { RewardsAvgOrderByAggregateInput } from "../inputs/RewardsAvgOrderByAggregateInput";
import { RewardsCountOrderByAggregateInput } from "../inputs/RewardsCountOrderByAggregateInput";
import { RewardsMaxOrderByAggregateInput } from "../inputs/RewardsMaxOrderByAggregateInput";
import { RewardsMinOrderByAggregateInput } from "../inputs/RewardsMinOrderByAggregateInput";
import { RewardsSumOrderByAggregateInput } from "../inputs/RewardsSumOrderByAggregateInput";
export declare class RewardsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    slug?: "asc" | "desc" | undefined;
    level?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    coupons?: "asc" | "desc" | undefined;
    expiration?: "asc" | "desc" | undefined;
    categories?: "asc" | "desc" | undefined;
    articles?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    users?: "asc" | "desc" | undefined;
    _count?: RewardsCountOrderByAggregateInput | undefined;
    _avg?: RewardsAvgOrderByAggregateInput | undefined;
    _max?: RewardsMaxOrderByAggregateInput | undefined;
    _min?: RewardsMinOrderByAggregateInput | undefined;
    _sum?: RewardsSumOrderByAggregateInput | undefined;
}
