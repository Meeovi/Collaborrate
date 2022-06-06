import { ShopsOrderByWithAggregationInput } from "../../../inputs/ShopsOrderByWithAggregationInput";
import { ShopsScalarWhereWithAggregatesInput } from "../../../inputs/ShopsScalarWhereWithAggregatesInput";
import { ShopsWhereInput } from "../../../inputs/ShopsWhereInput";
export declare class GroupByShopsArgs {
    where?: ShopsWhereInput | undefined;
    orderBy?: ShopsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "description" | "image" | "website" | "products" | "articles" | "customers" | "comments" | "coupons" | "categories" | "polls" | "quotes" | "reviews" | "gift_certificates" | "rating" | "tags" | "users" | "invoices" | "reports" | "reward_points" | "special_discounts" | "statistics" | "stocks">;
    having?: ShopsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
