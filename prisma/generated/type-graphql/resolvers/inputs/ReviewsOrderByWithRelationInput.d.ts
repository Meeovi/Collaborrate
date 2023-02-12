import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ReviewsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    first_name?: SortOrderInput | undefined;
    last_name?: SortOrderInput | undefined;
    content?: SortOrderInput | undefined;
    websites?: SortOrderInput | undefined;
    created_at?: SortOrderInput | undefined;
}
