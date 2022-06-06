import { OpportunitiesOrderByWithRelationInput } from "../../../inputs/OpportunitiesOrderByWithRelationInput";
import { OpportunitiesWhereInput } from "../../../inputs/OpportunitiesWhereInput";
import { OpportunitiesWhereUniqueInput } from "../../../inputs/OpportunitiesWhereUniqueInput";
export declare class FindManyOpportunitiesArgs {
    where?: OpportunitiesWhereInput | undefined;
    orderBy?: OpportunitiesOrderByWithRelationInput[] | undefined;
    cursor?: OpportunitiesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "amount" | "sales_stage" | "currency" | "probability" | "next_step" | "description" | "assigned_to" | "lead_source" | "campaign" | "type" | "account_name" | "expected_close_date"> | undefined;
}
