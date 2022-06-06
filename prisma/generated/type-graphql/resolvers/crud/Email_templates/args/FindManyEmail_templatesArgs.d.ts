import { Email_templatesOrderByWithRelationInput } from "../../../inputs/Email_templatesOrderByWithRelationInput";
import { Email_templatesWhereInput } from "../../../inputs/Email_templatesWhereInput";
import { Email_templatesWhereUniqueInput } from "../../../inputs/Email_templatesWhereUniqueInput";
export declare class FindManyEmail_templatesArgs {
    where?: Email_templatesWhereInput | undefined;
    orderBy?: Email_templatesOrderByWithRelationInput[] | undefined;
    cursor?: Email_templatesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "assigned_to" | "type" | "active" | "insert_variable" | "subject" | "content" | "header" | "footer" | "width" | "height" | "media"> | undefined;
}
