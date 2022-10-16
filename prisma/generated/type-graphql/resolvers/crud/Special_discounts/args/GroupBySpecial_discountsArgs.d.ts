import { Special_discountsOrderByWithAggregationInput } from "../../../inputs/Special_discountsOrderByWithAggregationInput";
import { Special_discountsScalarWhereWithAggregatesInput } from "../../../inputs/Special_discountsScalarWhereWithAggregatesInput";
import { Special_discountsWhereInput } from "../../../inputs/Special_discountsWhereInput";
export declare class GroupBySpecial_discountsArgs {
    where?: Special_discountsWhereInput | undefined;
    orderBy?: Special_discountsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "excerpt" | "discount" | "image" | "published" | "rewards" | "coupons" | "expiration" | "categories" | "articles" | "products" | "customers" | "users">;
    having?: Special_discountsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
