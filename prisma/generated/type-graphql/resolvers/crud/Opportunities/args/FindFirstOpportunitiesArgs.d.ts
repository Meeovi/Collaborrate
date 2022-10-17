import { OpportunitiesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/OpportunitiesOrderByWithRelationAndSearchRelevanceInput";
import { OpportunitiesWhereInput } from "../../../inputs/OpportunitiesWhereInput";
import { OpportunitiesWhereUniqueInput } from "../../../inputs/OpportunitiesWhereUniqueInput";
export declare class FindFirstOpportunitiesArgs {
    where?: OpportunitiesWhereInput | undefined;
    orderBy?: OpportunitiesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: OpportunitiesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "amount" | "sales_stage" | "currency" | "probability" | "next_step" | "description" | "assigned_to" | "lead_source" | "campaign" | "type" | "account_name" | "expected_close_date"> | undefined;
}
