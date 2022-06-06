import { Upload_file_morphOrderByWithAggregationInput } from "../../../inputs/Upload_file_morphOrderByWithAggregationInput";
import { Upload_file_morphScalarWhereWithAggregatesInput } from "../../../inputs/Upload_file_morphScalarWhereWithAggregatesInput";
import { Upload_file_morphWhereInput } from "../../../inputs/Upload_file_morphWhereInput";
export declare class GroupByUpload_file_morphArgs {
    where?: Upload_file_morphWhereInput | undefined;
    orderBy?: Upload_file_morphOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "upload_file_id" | "related_id" | "related_type" | "field" | "order">;
    having?: Upload_file_morphScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
