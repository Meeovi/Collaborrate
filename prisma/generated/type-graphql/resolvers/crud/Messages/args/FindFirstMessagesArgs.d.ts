import { MessagesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MessagesOrderByWithRelationAndSearchRelevanceInput";
import { MessagesWhereInput } from "../../../inputs/MessagesWhereInput";
import { MessagesWhereUniqueInput } from "../../../inputs/MessagesWhereUniqueInput";
export declare class FindFirstMessagesArgs {
    where?: MessagesWhereInput | undefined;
    orderBy?: MessagesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: MessagesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "from" | "created_at" | "subject" | "content" | "sender" | "cust_id" | "media" | "staff_id" | "customers" | "users"> | undefined;
}
