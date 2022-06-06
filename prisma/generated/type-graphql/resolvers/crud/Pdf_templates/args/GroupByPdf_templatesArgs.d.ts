import { Pdf_templatesOrderByWithAggregationInput } from "../../../inputs/Pdf_templatesOrderByWithAggregationInput";
import { Pdf_templatesScalarWhereWithAggregatesInput } from "../../../inputs/Pdf_templatesScalarWhereWithAggregatesInput";
import { Pdf_templatesWhereInput } from "../../../inputs/Pdf_templatesWhereInput";
export declare class GroupByPdf_templatesArgs {
    where?: Pdf_templatesWhereInput | undefined;
    orderBy?: Pdf_templatesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "assigned_to" | "type" | "active" | "page_size" | "orientation" | "content" | "header" | "footer" | "margin_left" | "margin_right" | "margin_top" | "margin_bottom" | "margin_header" | "margin_footer">;
    having?: Pdf_templatesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
