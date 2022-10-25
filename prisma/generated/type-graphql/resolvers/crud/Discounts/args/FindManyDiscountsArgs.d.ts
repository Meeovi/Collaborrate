import { DiscountsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DiscountsOrderByWithRelationAndSearchRelevanceInput";
import { DiscountsWhereInput } from "../../../inputs/DiscountsWhereInput";
import { DiscountsWhereUniqueInput } from "../../../inputs/DiscountsWhereUniqueInput";
export declare class FindManyDiscountsArgs {
    where?: DiscountsWhereInput | undefined;
    orderBy?: DiscountsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: DiscountsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "excerpt" | "discount" | "image" | "published" | "special_offers" | "rewards" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users" | "type"> | undefined;
}
