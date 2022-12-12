import { VisitsOrderByWithAggregationInput } from "../../../inputs/VisitsOrderByWithAggregationInput";
import { VisitsScalarWhereWithAggregatesInput } from "../../../inputs/VisitsScalarWhereWithAggregatesInput";
import { VisitsWhereInput } from "../../../inputs/VisitsWhereInput";
export declare class GroupByVisitsArgs {
    where?: VisitsWhereInput | undefined;
    orderBy?: VisitsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "location" | "username" | "reason" | "content" | "emergency" | "start_date" | "end_date" | "task" | "meeting">;
    having?: VisitsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
