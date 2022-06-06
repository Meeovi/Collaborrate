import { EmailsOrderByWithAggregationInput } from "../../../inputs/EmailsOrderByWithAggregationInput";
import { EmailsScalarWhereWithAggregatesInput } from "../../../inputs/EmailsScalarWhereWithAggregatesInput";
import { EmailsWhereInput } from "../../../inputs/EmailsWhereInput";
export declare class GroupByEmailsArgs {
    where?: EmailsWhereInput | undefined;
    orderBy?: EmailsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "created_at" | "subject" | "content" | "recipients" | "cust_id">;
    having?: EmailsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
