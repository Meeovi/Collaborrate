import { Upload_fileOrderByWithRelationInput } from "../../../inputs/Upload_fileOrderByWithRelationInput";
import { Upload_fileWhereInput } from "../../../inputs/Upload_fileWhereInput";
import { Upload_fileWhereUniqueInput } from "../../../inputs/Upload_fileWhereUniqueInput";
export declare class AggregateUpload_fileArgs {
    where?: Upload_fileWhereInput | undefined;
    orderBy?: Upload_fileOrderByWithRelationInput[] | undefined;
    cursor?: Upload_fileWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
