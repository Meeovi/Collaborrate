import { Gift_certificatesOrderByWithAggregationInput } from "../../../inputs/Gift_certificatesOrderByWithAggregationInput";
import { Gift_certificatesScalarWhereWithAggregatesInput } from "../../../inputs/Gift_certificatesScalarWhereWithAggregatesInput";
import { Gift_certificatesWhereInput } from "../../../inputs/Gift_certificatesWhereInput";
export declare class GroupByGift_certificatesArgs {
    where?: Gift_certificatesWhereInput | undefined;
    orderBy?: Gift_certificatesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "excerpt" | "discount" | "image" | "published" | "special_offers" | "rewards" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users" | "type">;
    having?: Gift_certificatesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
