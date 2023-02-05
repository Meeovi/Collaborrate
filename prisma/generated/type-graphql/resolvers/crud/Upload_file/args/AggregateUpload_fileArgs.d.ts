import { Upload_fileOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Upload_fileOrderByWithRelationAndSearchRelevanceInput";
import { Upload_fileWhereInput } from "../../../inputs/Upload_fileWhereInput";
import { Upload_fileWhereUniqueInput } from "../../../inputs/Upload_fileWhereUniqueInput";
export declare class AggregateUpload_fileArgs {
    where?: Upload_fileWhereInput | undefined;
    orderBy?: Upload_fileOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Upload_fileWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
