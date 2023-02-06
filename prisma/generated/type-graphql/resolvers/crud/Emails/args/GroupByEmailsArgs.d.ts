import { EmailsOrderByWithAggregationInput } from "../../../inputs/EmailsOrderByWithAggregationInput";
import { EmailsScalarWhereWithAggregatesInput } from "../../../inputs/EmailsScalarWhereWithAggregatesInput";
import { EmailsWhereInput } from "../../../inputs/EmailsWhereInput";
export declare class GroupByEmailsArgs {
    where?: EmailsWhereInput | undefined;
    orderBy?: EmailsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "subject" | "content" | "cust_id" | "bcc" | "cc" | "from" | "media" | "staff_id" | "customers" | "users">;
    having?: EmailsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
