import { SegmentsOrderByWithAggregationInput } from "../../../inputs/SegmentsOrderByWithAggregationInput";
import { SegmentsScalarWhereWithAggregatesInput } from "../../../inputs/SegmentsScalarWhereWithAggregatesInput";
import { SegmentsWhereInput } from "../../../inputs/SegmentsWhereInput";
export declare class GroupBySegmentsArgs {
    where?: SegmentsWhereInput | undefined;
    orderBy?: SegmentsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "description" | "website" | "status" | "apply_to" | "customers">;
    having?: SegmentsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
