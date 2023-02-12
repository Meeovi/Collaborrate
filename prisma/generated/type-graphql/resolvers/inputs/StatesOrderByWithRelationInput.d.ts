import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class StatesOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    trainings?: SortOrderInput | undefined;
}
