import { MessagesOrderByWithAggregationInput } from "../../../inputs/MessagesOrderByWithAggregationInput";
import { MessagesScalarWhereWithAggregatesInput } from "../../../inputs/MessagesScalarWhereWithAggregatesInput";
import { MessagesWhereInput } from "../../../inputs/MessagesWhereInput";
export declare class GroupByMessagesArgs {
    where?: MessagesWhereInput | undefined;
    orderBy?: MessagesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "from" | "created_at" | "subject" | "content" | "sender" | "cust_id" | "media" | "staff_id" | "customers" | "users">;
    having?: MessagesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
