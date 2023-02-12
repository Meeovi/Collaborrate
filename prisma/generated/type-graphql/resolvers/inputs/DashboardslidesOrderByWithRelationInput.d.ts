import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class DashboardslidesOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    categories?: SortOrderInput | undefined;
    media?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
}
