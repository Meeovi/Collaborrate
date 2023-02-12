import { SegmentsOrderByWithRelationInput } from "../../../inputs/SegmentsOrderByWithRelationInput";
import { SegmentsWhereInput } from "../../../inputs/SegmentsWhereInput";
import { SegmentsWhereUniqueInput } from "../../../inputs/SegmentsWhereUniqueInput";
export declare class FindFirstSegmentsOrThrowArgs {
    where?: SegmentsWhereInput | undefined;
    orderBy?: SegmentsOrderByWithRelationInput[] | undefined;
    cursor?: SegmentsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "description" | "website" | "status" | "apply_to" | "customers"> | undefined;
}
