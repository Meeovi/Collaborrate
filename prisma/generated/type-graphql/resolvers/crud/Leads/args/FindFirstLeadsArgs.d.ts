import { LeadsOrderByWithRelationInput } from "../../../inputs/LeadsOrderByWithRelationInput";
import { LeadsWhereInput } from "../../../inputs/LeadsWhereInput";
import { LeadsWhereUniqueInput } from "../../../inputs/LeadsWhereUniqueInput";
export declare class FindFirstLeadsArgs {
    where?: LeadsWhereInput | undefined;
    orderBy?: LeadsOrderByWithRelationInput[] | undefined;
    cursor?: LeadsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "Prefix" | "first_name" | "last_name" | "department" | "account_name" | "address" | "postalcode" | "city" | "state" | "country" | "email" | "description" | "fax" | "website" | "mobile" | "job_title" | "alt_address" | "alt_postalcode" | "alt_city" | "alt_state" | "alt_country" | "office_phone" | "status" | "status_description" | "opportunity_amount" | "campaign" | "lead_source" | "lead_source_description" | "referred_by" | "customer_name"> | undefined;
}
