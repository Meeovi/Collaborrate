import { TemplatesOrderByWithRelationInput } from "../../../inputs/TemplatesOrderByWithRelationInput";
import { TemplatesWhereInput } from "../../../inputs/TemplatesWhereInput";
import { TemplatesWhereUniqueInput } from "../../../inputs/TemplatesWhereUniqueInput";
export declare class FindFirstTemplatesOrThrowArgs {
    where?: TemplatesWhereInput | undefined;
    orderBy?: TemplatesOrderByWithRelationInput[] | undefined;
    cursor?: TemplatesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "assigned_to" | "type" | "active" | "page_size" | "orientation" | "content" | "header" | "footer" | "margin_left" | "margin_right" | "margin_top" | "margin_bottom" | "margin_header" | "margin_footer"> | undefined;
}
