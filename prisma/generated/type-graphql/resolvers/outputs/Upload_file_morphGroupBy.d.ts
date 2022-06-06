import { Upload_file_morphAvgAggregate } from "../outputs/Upload_file_morphAvgAggregate";
import { Upload_file_morphCountAggregate } from "../outputs/Upload_file_morphCountAggregate";
import { Upload_file_morphMaxAggregate } from "../outputs/Upload_file_morphMaxAggregate";
import { Upload_file_morphMinAggregate } from "../outputs/Upload_file_morphMinAggregate";
import { Upload_file_morphSumAggregate } from "../outputs/Upload_file_morphSumAggregate";
export declare class Upload_file_morphGroupBy {
    id: number;
    upload_file_id: number | null;
    related_id: number | null;
    related_type: string | null;
    field: string | null;
    order: number | null;
    _count: Upload_file_morphCountAggregate | null;
    _avg: Upload_file_morphAvgAggregate | null;
    _sum: Upload_file_morphSumAggregate | null;
    _min: Upload_file_morphMinAggregate | null;
    _max: Upload_file_morphMaxAggregate | null;
}
