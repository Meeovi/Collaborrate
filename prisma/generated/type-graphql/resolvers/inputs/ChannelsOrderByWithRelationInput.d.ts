import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ChannelsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    code?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    currency?: SortOrderInput | undefined;
    default_lang?: SortOrderInput | undefined;
    include_tax?: SortOrderInput | undefined;
    default_zone?: SortOrderInput | undefined;
    default_shipping?: SortOrderInput | undefined;
    client_id?: SortOrderInput | undefined;
    client_secret?: SortOrderInput | undefined;
}
