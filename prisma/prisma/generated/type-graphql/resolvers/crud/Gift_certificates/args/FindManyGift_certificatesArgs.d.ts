import { Gift_certificatesOrderByWithRelationInput } from "../../../inputs/Gift_certificatesOrderByWithRelationInput";
import { Gift_certificatesWhereInput } from "../../../inputs/Gift_certificatesWhereInput";
import { Gift_certificatesWhereUniqueInput } from "../../../inputs/Gift_certificatesWhereUniqueInput";
export declare class FindManyGift_certificatesArgs {
    where?: Gift_certificatesWhereInput | undefined;
    orderBy?: Gift_certificatesOrderByWithRelationInput[] | undefined;
    cursor?: Gift_certificatesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "excerpt" | "discount" | "image" | "published" | "special_offers" | "rewards" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users" | "type"> | undefined;
}
