import { Upload_fileOrderByWithAggregationInput } from "../../../inputs/Upload_fileOrderByWithAggregationInput";
import { Upload_fileScalarWhereWithAggregatesInput } from "../../../inputs/Upload_fileScalarWhereWithAggregatesInput";
import { Upload_fileWhereInput } from "../../../inputs/Upload_fileWhereInput";
export declare class GroupByUpload_fileArgs {
    where?: Upload_fileWhereInput | undefined;
    orderBy?: Upload_fileOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "alternativeText" | "caption" | "width" | "height" | "formats" | "hash" | "ext" | "mime" | "size" | "url" | "previewUrl" | "provider" | "provider_metadata" | "created_by" | "updated_by" | "created_at" | "updated_at">;
    having?: Upload_fileScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
