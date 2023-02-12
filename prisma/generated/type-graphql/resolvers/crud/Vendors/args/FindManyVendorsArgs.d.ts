import { VendorsOrderByWithRelationInput } from "../../../inputs/VendorsOrderByWithRelationInput";
import { VendorsWhereInput } from "../../../inputs/VendorsWhereInput";
import { VendorsWhereUniqueInput } from "../../../inputs/VendorsWhereUniqueInput";
export declare class FindManyVendorsArgs {
    where?: VendorsWhereInput | undefined;
    orderBy?: VendorsOrderByWithRelationInput[] | undefined;
    cursor?: VendorsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "description" | "image" | "website" | "products" | "articles" | "customers" | "comments" | "coupons" | "categories" | "polls" | "quotes" | "reviews" | "gift_certificates" | "rating" | "tags" | "users" | "invoices" | "reports" | "reward_points" | "special_discounts" | "statistics" | "stocks" | "country" | "physical_store" | "type" | "workspaces"> | undefined;
}
