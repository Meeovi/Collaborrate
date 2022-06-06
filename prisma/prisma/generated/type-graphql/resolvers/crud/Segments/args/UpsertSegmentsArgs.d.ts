import { SegmentsCreateInput } from "../../../inputs/SegmentsCreateInput";
import { SegmentsUpdateInput } from "../../../inputs/SegmentsUpdateInput";
import { SegmentsWhereUniqueInput } from "../../../inputs/SegmentsWhereUniqueInput";
export declare class UpsertSegmentsArgs {
    where: SegmentsWhereUniqueInput;
    create: SegmentsCreateInput;
    update: SegmentsUpdateInput;
}
