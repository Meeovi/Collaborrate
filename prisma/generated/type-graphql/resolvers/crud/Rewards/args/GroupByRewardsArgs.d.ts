import { RewardsOrderByWithAggregationInput } from "../../../inputs/RewardsOrderByWithAggregationInput";
import { RewardsScalarWhereWithAggregatesInput } from "../../../inputs/RewardsScalarWhereWithAggregatesInput";
import { RewardsWhereInput } from "../../../inputs/RewardsWhereInput";
export declare class GroupByRewardsArgs {
    where?: RewardsWhereInput | undefined;
    orderBy?: RewardsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "slug" | "level" | "created_at" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users">;
    having?: RewardsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
