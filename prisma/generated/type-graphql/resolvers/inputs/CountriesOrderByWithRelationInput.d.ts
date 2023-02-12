import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class CountriesOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    region?: SortOrderInput | undefined;
    trainings?: SortOrderInput | undefined;
}
