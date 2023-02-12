import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class WishlistsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    customers?: SortOrderInput | undefined;
    visibility?: SortOrderInput | undefined;
    products?: SortOrderInput | undefined;
    quantity?: SortOrderInput | undefined;
    occassions?: SortOrderInput | undefined;
}
