import { Special_discountsOrderByWithRelationInput } from "../../../inputs/Special_discountsOrderByWithRelationInput";
import { Special_discountsWhereInput } from "../../../inputs/Special_discountsWhereInput";
import { Special_discountsWhereUniqueInput } from "../../../inputs/Special_discountsWhereUniqueInput";
export declare class FindManySpecial_discountsArgs {
    where?: Special_discountsWhereInput | undefined;
    orderBy?: Special_discountsOrderByWithRelationInput[] | undefined;
    cursor?: Special_discountsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "excerpt" | "discount" | "image" | "published" | "rewards" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users"> | undefined;
}
