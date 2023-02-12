import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class WebhooksOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    headers?: SortOrderInput | undefined;
    create?: SortOrderInput | undefined;
    retrieve?: SortOrderInput | undefined;
    update?: SortOrderInput | undefined;
    delete?: SortOrderInput | undefined;
    publish?: SortOrderInput | undefined;
    unpublish?: SortOrderInput | undefined;
}
