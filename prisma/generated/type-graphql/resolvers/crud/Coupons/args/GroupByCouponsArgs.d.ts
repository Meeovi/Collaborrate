import { CouponsOrderByWithAggregationInput } from "../../../inputs/CouponsOrderByWithAggregationInput";
import { CouponsScalarWhereWithAggregatesInput } from "../../../inputs/CouponsScalarWhereWithAggregatesInput";
import { CouponsWhereInput } from "../../../inputs/CouponsWhereInput";
export declare class GroupByCouponsArgs {
    where?: CouponsWhereInput | undefined;
    orderBy?: CouponsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "excerpt" | "discount" | "image" | "published" | "expiration" | "categories" | "articles" | "products" | "customers" | "users" | "prod_id" | "products_couponsToproducts">;
    having?: CouponsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
