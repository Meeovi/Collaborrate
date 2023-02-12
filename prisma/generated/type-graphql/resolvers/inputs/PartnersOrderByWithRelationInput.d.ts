import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class PartnersOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    address?: SortOrderInput | undefined;
    city?: SortOrderInput | undefined;
    state?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
    isPublic?: SortOrderInput | undefined;
    business_type?: SortOrderInput | undefined;
}
