import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ReturnsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    validity?: SortOrderInput | undefined;
    return_prefix?: SortOrderInput | undefined;
    customers?: SortOrderInput | undefined;
    products?: SortOrderInput | undefined;
    type?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    shippingNumber?: SortOrderInput | undefined;
    shippingDescription?: SortOrderInput | undefined;
    status?: SortOrderInput | undefined;
    liquidationReason?: SortOrderInput | undefined;
    media?: SortOrderInput | undefined;
    weight?: SortOrderInput | undefined;
    height?: SortOrderInput | undefined;
    howShipped?: SortOrderInput | undefined;
    location?: SortOrderInput | undefined;
    shipTo?: SortOrderInput | undefined;
    case_id?: SortOrderInput | undefined;
}
