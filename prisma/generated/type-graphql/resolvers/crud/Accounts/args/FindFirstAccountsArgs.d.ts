import { AccountsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/AccountsOrderByWithRelationAndSearchRelevanceInput";
import { AccountsWhereInput } from "../../../inputs/AccountsWhereInput";
import { AccountsWhereUniqueInput } from "../../../inputs/AccountsWhereUniqueInput";
export declare class FindFirstAccountsArgs {
    where?: AccountsWhereInput | undefined;
    orderBy?: AccountsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: AccountsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "website" | "office_phone" | "fax" | "email" | "address" | "postalcode" | "city" | "state" | "country" | "assigned_to" | "alt_address" | "alt_postalcode" | "alt_city" | "alt_state" | "alt_country" | "type" | "industry" | "employees" | "annual_revenue" | "member_of" | "campaign"> | undefined;
}
