import { LeadsOrderByWithAggregationInput } from "../../../inputs/LeadsOrderByWithAggregationInput";
import { LeadsScalarWhereWithAggregatesInput } from "../../../inputs/LeadsScalarWhereWithAggregatesInput";
import { LeadsWhereInput } from "../../../inputs/LeadsWhereInput";
export declare class GroupByLeadsArgs {
    where?: LeadsWhereInput | undefined;
    orderBy?: LeadsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "Prefix" | "first_name" | "last_name" | "department" | "account_name" | "address" | "postalcode" | "city" | "state" | "country" | "email" | "description" | "fax" | "website" | "mobile" | "job_title" | "alt_address" | "alt_postalcode" | "alt_city" | "alt_state" | "alt_country" | "office_phone" | "status" | "status_description" | "opportunity_amount" | "campaign" | "lead_source" | "lead_source_description" | "referred_by" | "customer_name">;
    having?: LeadsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
