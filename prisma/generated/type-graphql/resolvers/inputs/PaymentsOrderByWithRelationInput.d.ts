import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class PaymentsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    client_id?: SortOrderInput | undefined;
    client_secret?: SortOrderInput | undefined;
    host_uri?: SortOrderInput | undefined;
    redirect_url?: SortOrderInput | undefined;
    redirect_url_app?: SortOrderInput | undefined;
    icon?: SortOrderInput | undefined;
    name?: "asc" | "desc" | undefined;
    active?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
}
