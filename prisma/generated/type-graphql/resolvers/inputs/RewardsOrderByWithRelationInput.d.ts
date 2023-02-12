import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class RewardsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    slug?: SortOrderInput | undefined;
    level?: SortOrderInput | undefined;
    created_at?: SortOrderInput | undefined;
    coupons?: SortOrderInput | undefined;
    expiration?: SortOrderInput | undefined;
    categories?: SortOrderInput | undefined;
    articles?: SortOrderInput | undefined;
    products?: SortOrderInput | undefined;
    customers?: SortOrderInput | undefined;
    users?: SortOrderInput | undefined;
}
