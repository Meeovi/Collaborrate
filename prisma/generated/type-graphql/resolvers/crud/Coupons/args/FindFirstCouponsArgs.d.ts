import { CouponsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CouponsOrderByWithRelationAndSearchRelevanceInput";
import { CouponsWhereInput } from "../../../inputs/CouponsWhereInput";
import { CouponsWhereUniqueInput } from "../../../inputs/CouponsWhereUniqueInput";
export declare class FindFirstCouponsArgs {
    where?: CouponsWhereInput | undefined;
    orderBy?: CouponsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: CouponsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "excerpt" | "discount" | "image" | "published" | "expiration" | "categories" | "articles" | "products" | "customers" | "users" | "prod_id" | "products_couponsToproducts"> | undefined;
}
