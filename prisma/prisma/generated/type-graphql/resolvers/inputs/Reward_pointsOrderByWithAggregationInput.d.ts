import { Reward_pointsAvgOrderByAggregateInput } from "../inputs/Reward_pointsAvgOrderByAggregateInput";
import { Reward_pointsCountOrderByAggregateInput } from "../inputs/Reward_pointsCountOrderByAggregateInput";
import { Reward_pointsMaxOrderByAggregateInput } from "../inputs/Reward_pointsMaxOrderByAggregateInput";
import { Reward_pointsMinOrderByAggregateInput } from "../inputs/Reward_pointsMinOrderByAggregateInput";
import { Reward_pointsSumOrderByAggregateInput } from "../inputs/Reward_pointsSumOrderByAggregateInput";
export declare class Reward_pointsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    excerpt?: "asc" | "desc" | undefined;
    discount?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    coupons?: "asc" | "desc" | undefined;
    expiration?: "asc" | "desc" | undefined;
    categories?: "asc" | "desc" | undefined;
    articles?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    users?: "asc" | "desc" | undefined;
    _count?: Reward_pointsCountOrderByAggregateInput | undefined;
    _avg?: Reward_pointsAvgOrderByAggregateInput | undefined;
    _max?: Reward_pointsMaxOrderByAggregateInput | undefined;
    _min?: Reward_pointsMinOrderByAggregateInput | undefined;
    _sum?: Reward_pointsSumOrderByAggregateInput | undefined;
}
