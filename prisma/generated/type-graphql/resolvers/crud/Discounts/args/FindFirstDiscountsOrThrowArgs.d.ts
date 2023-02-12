import { DiscountsOrderByWithRelationInput } from "../../../inputs/DiscountsOrderByWithRelationInput";
import { DiscountsWhereInput } from "../../../inputs/DiscountsWhereInput";
import { DiscountsWhereUniqueInput } from "../../../inputs/DiscountsWhereUniqueInput";
export declare class FindFirstDiscountsOrThrowArgs {
    where?: DiscountsWhereInput | undefined;
    orderBy?: DiscountsOrderByWithRelationInput[] | undefined;
    cursor?: DiscountsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "excerpt" | "discount" | "image" | "published" | "special_offers" | "rewards" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users" | "type" | "creditMemo" | "billToName" | "orderNumber" | "refunded" | "status"> | undefined;
}
