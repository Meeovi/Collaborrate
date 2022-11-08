import { DeepdiveOrderByWithAggregationInput } from "../../../inputs/DeepdiveOrderByWithAggregationInput";
import { DeepdiveScalarWhereWithAggregatesInput } from "../../../inputs/DeepdiveScalarWhereWithAggregatesInput";
import { DeepdiveWhereInput } from "../../../inputs/DeepdiveWhereInput";
export declare class GroupByDeepdiveArgs {
    where?: DeepdiveWhereInput | undefined;
    orderBy?: DeepdiveOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "end_date" | "content" | "attendees" | "login" | "start_date" | "whid">;
    having?: DeepdiveScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
