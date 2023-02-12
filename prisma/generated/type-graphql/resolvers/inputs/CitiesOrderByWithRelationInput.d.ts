import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class CitiesOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: SortOrderInput | undefined;
    state?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
    postalCode?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
}
