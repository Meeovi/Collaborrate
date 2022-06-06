import { Email_templatesOrderByWithAggregationInput } from "../../../inputs/Email_templatesOrderByWithAggregationInput";
import { Email_templatesScalarWhereWithAggregatesInput } from "../../../inputs/Email_templatesScalarWhereWithAggregatesInput";
import { Email_templatesWhereInput } from "../../../inputs/Email_templatesWhereInput";
export declare class GroupByEmail_templatesArgs {
    where?: Email_templatesWhereInput | undefined;
    orderBy?: Email_templatesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "assigned_to" | "type" | "active" | "insert_variable" | "subject" | "content" | "header" | "footer" | "width" | "height" | "media">;
    having?: Email_templatesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
