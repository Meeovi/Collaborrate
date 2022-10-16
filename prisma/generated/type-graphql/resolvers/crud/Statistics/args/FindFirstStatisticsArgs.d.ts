import { StatisticsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/StatisticsOrderByWithRelationAndSearchRelevanceInput";
import { StatisticsWhereInput } from "../../../inputs/StatisticsWhereInput";
import { StatisticsWhereUniqueInput } from "../../../inputs/StatisticsWhereUniqueInput";
export declare class FindFirstStatisticsArgs {
    where?: StatisticsWhereInput | undefined;
    orderBy?: StatisticsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: StatisticsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "excerpt" | "description" | "image" | "published" | "special_offers" | "reports" | "rewards" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users"> | undefined;
}
