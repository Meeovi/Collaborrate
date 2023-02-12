import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ShipmentsOrderByWithRelationInput {
    product?: SortOrderInput | undefined;
    speed_grade?: SortOrderInput | undefined;
    ship_date?: SortOrderInput | undefined;
    carrier_name?: "asc" | "desc" | undefined;
    transit_time?: SortOrderInput | undefined;
    tracking_url?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    id?: "asc" | "desc" | undefined;
    client_id?: SortOrderInput | undefined;
    client_secret?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
    website?: SortOrderInput | undefined;
}
