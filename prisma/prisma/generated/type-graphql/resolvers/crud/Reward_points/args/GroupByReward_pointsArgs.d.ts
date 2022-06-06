import { Reward_pointsOrderByWithAggregationInput } from "../../../inputs/Reward_pointsOrderByWithAggregationInput";
import { Reward_pointsScalarWhereWithAggregatesInput } from "../../../inputs/Reward_pointsScalarWhereWithAggregatesInput";
import { Reward_pointsWhereInput } from "../../../inputs/Reward_pointsWhereInput";
export declare class GroupByReward_pointsArgs {
    where?: Reward_pointsWhereInput | undefined;
    orderBy?: Reward_pointsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "excerpt" | "discount" | "image" | "published" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users">;
    having?: Reward_pointsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
