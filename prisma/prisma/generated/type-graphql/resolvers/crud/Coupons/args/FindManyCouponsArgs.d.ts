import { CouponsOrderByWithRelationInput } from "../../../inputs/CouponsOrderByWithRelationInput";
import { CouponsWhereInput } from "../../../inputs/CouponsWhereInput";
import { CouponsWhereUniqueInput } from "../../../inputs/CouponsWhereUniqueInput";
export declare class FindManyCouponsArgs {
    where?: CouponsWhereInput | undefined;
    orderBy?: CouponsOrderByWithRelationInput[] | undefined;
    cursor?: CouponsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "excerpt" | "discount" | "image" | "published" | "expiration" | "categories" | "articles" | "products" | "customers" | "users" | "prod_id"> | undefined;
}
