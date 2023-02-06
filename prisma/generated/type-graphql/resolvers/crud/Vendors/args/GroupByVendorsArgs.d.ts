import { VendorsOrderByWithAggregationInput } from "../../../inputs/VendorsOrderByWithAggregationInput";
import { VendorsScalarWhereWithAggregatesInput } from "../../../inputs/VendorsScalarWhereWithAggregatesInput";
import { VendorsWhereInput } from "../../../inputs/VendorsWhereInput";
export declare class GroupByVendorsArgs {
    where?: VendorsWhereInput | undefined;
    orderBy?: VendorsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "description" | "image" | "website" | "products" | "articles" | "customers" | "comments" | "coupons" | "categories" | "polls" | "quotes" | "reviews" | "gift_certificates" | "rating" | "tags" | "users" | "invoices" | "reports" | "reward_points" | "special_discounts" | "statistics" | "stocks" | "country" | "physical_store" | "type" | "workspaces">;
    having?: VendorsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
