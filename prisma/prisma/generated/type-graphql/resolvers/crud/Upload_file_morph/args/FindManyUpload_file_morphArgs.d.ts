import { Upload_file_morphOrderByWithRelationInput } from "../../../inputs/Upload_file_morphOrderByWithRelationInput";
import { Upload_file_morphWhereInput } from "../../../inputs/Upload_file_morphWhereInput";
import { Upload_file_morphWhereUniqueInput } from "../../../inputs/Upload_file_morphWhereUniqueInput";
export declare class FindManyUpload_file_morphArgs {
    where?: Upload_file_morphWhereInput | undefined;
    orderBy?: Upload_file_morphOrderByWithRelationInput[] | undefined;
    cursor?: Upload_file_morphWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "upload_file_id" | "related_id" | "related_type" | "field" | "order"> | undefined;
}
