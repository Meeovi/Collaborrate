import { SegmentsCreateInput } from "../../../inputs/SegmentsCreateInput";
import { SegmentsUpdateInput } from "../../../inputs/SegmentsUpdateInput";
import { SegmentsWhereUniqueInput } from "../../../inputs/SegmentsWhereUniqueInput";
export declare class UpsertOneSegmentsArgs {
    where: SegmentsWhereUniqueInput;
    create: SegmentsCreateInput;
    update: SegmentsUpdateInput;
}
