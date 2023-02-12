import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class SegmentsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    website?: SortOrderInput | undefined;
    status?: SortOrderInput | undefined;
    apply_to?: SortOrderInput | undefined;
    customers?: SortOrderInput | undefined;
}
