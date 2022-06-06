import { TargetsOrderByWithAggregationInput } from "../../../inputs/TargetsOrderByWithAggregationInput";
import { TargetsScalarWhereWithAggregatesInput } from "../../../inputs/TargetsScalarWhereWithAggregatesInput";
import { TargetsWhereInput } from "../../../inputs/TargetsWhereInput";
export declare class GroupByTargetsArgs {
    where?: TargetsWhereInput | undefined;
    orderBy?: TargetsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "Prefix" | "first_name" | "last_name" | "department" | "account_name" | "address" | "postalcode" | "city" | "state" | "country" | "email" | "description" | "fax" | "website" | "mobile" | "job_title" | "alt_address" | "alt_postalcode" | "alt_city" | "alt_state" | "alt_country" | "office_phone" | "customer_name" | "email_opt_out" | "donotcall">;
    having?: TargetsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
