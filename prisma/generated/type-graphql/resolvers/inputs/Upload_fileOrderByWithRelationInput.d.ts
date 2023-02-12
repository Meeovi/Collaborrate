import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class Upload_fileOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    alternativeText?: SortOrderInput | undefined;
    caption?: SortOrderInput | undefined;
    width?: SortOrderInput | undefined;
    height?: SortOrderInput | undefined;
    formats?: SortOrderInput | undefined;
    hash?: "asc" | "desc" | undefined;
    ext?: SortOrderInput | undefined;
    mime?: "asc" | "desc" | undefined;
    size?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    previewUrl?: SortOrderInput | undefined;
    provider?: "asc" | "desc" | undefined;
    provider_metadata?: SortOrderInput | undefined;
    created_by?: SortOrderInput | undefined;
    updated_by?: SortOrderInput | undefined;
    created_at?: SortOrderInput | undefined;
    updated_at?: SortOrderInput | undefined;
}
