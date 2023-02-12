import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class FullfillmentsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    shipping_zones?: SortOrderInput | undefined;
    company?: SortOrderInput | undefined;
    address?: SortOrderInput | undefined;
    address_two?: SortOrderInput | undefined;
    city?: SortOrderInput | undefined;
    state?: SortOrderInput | undefined;
    zipcode?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
    country_area?: SortOrderInput | undefined;
    phone?: SortOrderInput | undefined;
    pickup?: SortOrderInput | undefined;
    stock?: SortOrderInput | undefined;
}
