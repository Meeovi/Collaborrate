import { TemplatesOrderByWithAggregationInput } from "../../../inputs/TemplatesOrderByWithAggregationInput";
import { TemplatesScalarWhereWithAggregatesInput } from "../../../inputs/TemplatesScalarWhereWithAggregatesInput";
import { TemplatesWhereInput } from "../../../inputs/TemplatesWhereInput";
export declare class GroupByTemplatesArgs {
    where?: TemplatesWhereInput | undefined;
    orderBy?: TemplatesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "assigned_to" | "type" | "active" | "page_size" | "orientation" | "content" | "header" | "footer" | "margin_left" | "margin_right" | "margin_top" | "margin_bottom" | "margin_header" | "margin_footer">;
    having?: TemplatesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
