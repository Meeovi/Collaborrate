import { EndofshiftOrderByWithAggregationInput } from "../../../inputs/EndofshiftOrderByWithAggregationInput";
import { EndofshiftScalarWhereWithAggregatesInput } from "../../../inputs/EndofshiftScalarWhereWithAggregatesInput";
import { EndofshiftWhereInput } from "../../../inputs/EndofshiftWhereInput";
export declare class GroupByEndofshiftArgs {
    where?: EndofshiftWhereInput | undefined;
    orderBy?: EndofshiftOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "content" | "login" | "mcms" | "next_shift" | "projects" | "tickets" | "whid">;
    having?: EndofshiftScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
