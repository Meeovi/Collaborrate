import { Upload_fileAvgAggregate } from "../outputs/Upload_fileAvgAggregate";
import { Upload_fileCountAggregate } from "../outputs/Upload_fileCountAggregate";
import { Upload_fileMaxAggregate } from "../outputs/Upload_fileMaxAggregate";
import { Upload_fileMinAggregate } from "../outputs/Upload_fileMinAggregate";
import { Upload_fileSumAggregate } from "../outputs/Upload_fileSumAggregate";
export declare class AggregateUpload_file {
    _count: Upload_fileCountAggregate | null;
    _avg: Upload_fileAvgAggregate | null;
    _sum: Upload_fileSumAggregate | null;
    _min: Upload_fileMinAggregate | null;
    _max: Upload_fileMaxAggregate | null;
}
