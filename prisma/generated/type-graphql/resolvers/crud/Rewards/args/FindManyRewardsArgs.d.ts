import { RewardsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/RewardsOrderByWithRelationAndSearchRelevanceInput";
import { RewardsWhereInput } from "../../../inputs/RewardsWhereInput";
import { RewardsWhereUniqueInput } from "../../../inputs/RewardsWhereUniqueInput";
export declare class FindManyRewardsArgs {
    where?: RewardsWhereInput | undefined;
    orderBy?: RewardsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: RewardsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "slug" | "level" | "created_at" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users"> | undefined;
}
