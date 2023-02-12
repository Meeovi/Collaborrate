import { RewardsAvgOrderByAggregateInput } from "../inputs/RewardsAvgOrderByAggregateInput";
import { RewardsCountOrderByAggregateInput } from "../inputs/RewardsCountOrderByAggregateInput";
import { RewardsMaxOrderByAggregateInput } from "../inputs/RewardsMaxOrderByAggregateInput";
import { RewardsMinOrderByAggregateInput } from "../inputs/RewardsMinOrderByAggregateInput";
import { RewardsSumOrderByAggregateInput } from "../inputs/RewardsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class RewardsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    slug?: SortOrderInput | undefined;
    level?: SortOrderInput | undefined;
    created_at?: SortOrderInput | undefined;
    coupons?: SortOrderInput | undefined;
    expiration?: SortOrderInput | undefined;
    categories?: SortOrderInput | undefined;
    articles?: SortOrderInput | undefined;
    products?: SortOrderInput | undefined;
    customers?: SortOrderInput | undefined;
    users?: SortOrderInput | undefined;
    _count?: RewardsCountOrderByAggregateInput | undefined;
    _avg?: RewardsAvgOrderByAggregateInput | undefined;
    _max?: RewardsMaxOrderByAggregateInput | undefined;
    _min?: RewardsMinOrderByAggregateInput | undefined;
    _sum?: RewardsSumOrderByAggregateInput | undefined;
}
