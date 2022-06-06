import { Reward_pointsOrderByWithRelationInput } from "../../../inputs/Reward_pointsOrderByWithRelationInput";
import { Reward_pointsWhereInput } from "../../../inputs/Reward_pointsWhereInput";
import { Reward_pointsWhereUniqueInput } from "../../../inputs/Reward_pointsWhereUniqueInput";
export declare class FindManyReward_pointsArgs {
    where?: Reward_pointsWhereInput | undefined;
    orderBy?: Reward_pointsOrderByWithRelationInput[] | undefined;
    cursor?: Reward_pointsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "excerpt" | "discount" | "image" | "published" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users"> | undefined;
}
