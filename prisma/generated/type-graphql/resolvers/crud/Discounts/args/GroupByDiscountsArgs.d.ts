import { DiscountsOrderByWithAggregationInput } from "../../../inputs/DiscountsOrderByWithAggregationInput";
import { DiscountsScalarWhereWithAggregatesInput } from "../../../inputs/DiscountsScalarWhereWithAggregatesInput";
import { DiscountsWhereInput } from "../../../inputs/DiscountsWhereInput";
export declare class GroupByDiscountsArgs {
    where?: DiscountsWhereInput | undefined;
    orderBy?: DiscountsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "excerpt" | "discount" | "image" | "published" | "special_offers" | "rewards" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users" | "type" | "creditMemo" | "billToName" | "orderNumber" | "refunded" | "status">;
    having?: DiscountsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
