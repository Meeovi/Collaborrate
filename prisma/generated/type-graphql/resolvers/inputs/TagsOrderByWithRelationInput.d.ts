import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class TagsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    excerpt?: SortOrderInput | undefined;
    categories?: SortOrderInput | undefined;
    articles?: SortOrderInput | undefined;
    products?: SortOrderInput | undefined;
    customers?: SortOrderInput | undefined;
    users?: SortOrderInput | undefined;
}
