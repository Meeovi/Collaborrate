import { Pdf_templatesOrderByWithRelationInput } from "../../../inputs/Pdf_templatesOrderByWithRelationInput";
import { Pdf_templatesWhereInput } from "../../../inputs/Pdf_templatesWhereInput";
import { Pdf_templatesWhereUniqueInput } from "../../../inputs/Pdf_templatesWhereUniqueInput";
export declare class FindFirstPdf_templatesArgs {
    where?: Pdf_templatesWhereInput | undefined;
    orderBy?: Pdf_templatesOrderByWithRelationInput[] | undefined;
    cursor?: Pdf_templatesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "assigned_to" | "type" | "active" | "page_size" | "orientation" | "content" | "header" | "footer" | "margin_left" | "margin_right" | "margin_top" | "margin_bottom" | "margin_header" | "margin_footer"> | undefined;
}
