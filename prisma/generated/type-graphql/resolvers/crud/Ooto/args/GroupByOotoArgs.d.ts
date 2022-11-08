import { OotoOrderByWithAggregationInput } from "../../../inputs/OotoOrderByWithAggregationInput";
import { OotoScalarWhereWithAggregatesInput } from "../../../inputs/OotoScalarWhereWithAggregatesInput";
import { OotoWhereInput } from "../../../inputs/OotoWhereInput";
export declare class GroupByOotoArgs {
    where?: OotoWhereInput | undefined;
    orderBy?: OotoOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "login" | "start_date" | "end_date" | "note" | "using_time" | "location">;
    having?: OotoScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
