import { AccountsOrderByWithAggregationInput } from "../../../inputs/AccountsOrderByWithAggregationInput";
import { AccountsScalarWhereWithAggregatesInput } from "../../../inputs/AccountsScalarWhereWithAggregatesInput";
import { AccountsWhereInput } from "../../../inputs/AccountsWhereInput";
export declare class GroupByAccountsArgs {
    where?: AccountsWhereInput | undefined;
    orderBy?: AccountsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "website" | "office_phone" | "fax" | "email" | "address" | "postalcode" | "city" | "state" | "country" | "assigned_to" | "alt_address" | "alt_postalcode" | "alt_city" | "alt_state" | "alt_country" | "type" | "industry" | "employees" | "annual_revenue" | "member_of" | "campaign">;
    having?: AccountsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
