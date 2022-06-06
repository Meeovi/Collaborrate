import { EmailsOrderByWithRelationInput } from "../../../inputs/EmailsOrderByWithRelationInput";
import { EmailsWhereInput } from "../../../inputs/EmailsWhereInput";
import { EmailsWhereUniqueInput } from "../../../inputs/EmailsWhereUniqueInput";
export declare class FindFirstEmailsArgs {
    where?: EmailsWhereInput | undefined;
    orderBy?: EmailsOrderByWithRelationInput[] | undefined;
    cursor?: EmailsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "created_at" | "subject" | "content" | "recipients" | "cust_id"> | undefined;
}
