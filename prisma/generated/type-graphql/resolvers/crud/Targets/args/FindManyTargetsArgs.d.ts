import { TargetsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TargetsOrderByWithRelationAndSearchRelevanceInput";
import { TargetsWhereInput } from "../../../inputs/TargetsWhereInput";
import { TargetsWhereUniqueInput } from "../../../inputs/TargetsWhereUniqueInput";
export declare class FindManyTargetsArgs {
    where?: TargetsWhereInput | undefined;
    orderBy?: TargetsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: TargetsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "Prefix" | "first_name" | "last_name" | "department" | "account_name" | "address" | "postalcode" | "city" | "state" | "country" | "email" | "description" | "fax" | "website" | "mobile" | "job_title" | "alt_address" | "alt_postalcode" | "alt_city" | "alt_state" | "alt_country" | "office_phone" | "customer_name" | "email_opt_out" | "donotcall"> | undefined;
}
