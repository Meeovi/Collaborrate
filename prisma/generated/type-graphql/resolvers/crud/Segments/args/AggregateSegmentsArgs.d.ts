import { SegmentsOrderByWithRelationInput } from "../../../inputs/SegmentsOrderByWithRelationInput";
import { SegmentsWhereInput } from "../../../inputs/SegmentsWhereInput";
import { SegmentsWhereUniqueInput } from "../../../inputs/SegmentsWhereUniqueInput";
export declare class AggregateSegmentsArgs {
    where?: SegmentsWhereInput | undefined;
    orderBy?: SegmentsOrderByWithRelationInput[] | undefined;
    cursor?: SegmentsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
