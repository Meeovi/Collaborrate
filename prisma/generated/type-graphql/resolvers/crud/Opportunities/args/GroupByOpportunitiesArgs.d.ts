import { OpportunitiesOrderByWithAggregationInput } from "../../../inputs/OpportunitiesOrderByWithAggregationInput";
import { OpportunitiesScalarWhereWithAggregatesInput } from "../../../inputs/OpportunitiesScalarWhereWithAggregatesInput";
import { OpportunitiesWhereInput } from "../../../inputs/OpportunitiesWhereInput";
export declare class GroupByOpportunitiesArgs {
    where?: OpportunitiesWhereInput | undefined;
    orderBy?: OpportunitiesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "amount" | "sales_stage" | "currency" | "probability" | "next_step" | "description" | "assigned_to" | "lead_source" | "campaign" | "type" | "account_name" | "expected_close_date">;
    having?: OpportunitiesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
