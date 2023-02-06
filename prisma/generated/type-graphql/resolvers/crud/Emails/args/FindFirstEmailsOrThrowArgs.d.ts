import { EmailsOrderByWithRelationInput } from "../../../inputs/EmailsOrderByWithRelationInput";
import { EmailsWhereInput } from "../../../inputs/EmailsWhereInput";
import { EmailsWhereUniqueInput } from "../../../inputs/EmailsWhereUniqueInput";
export declare class FindFirstEmailsOrThrowArgs {
    where?: EmailsWhereInput | undefined;
    orderBy?: EmailsOrderByWithRelationInput[] | undefined;
    cursor?: EmailsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "subject" | "content" | "cust_id" | "bcc" | "cc" | "from" | "media" | "staff_id" | "customers" | "users"> | undefined;
}
