import { Pdf_templatesAvgOrderByAggregateInput } from "../inputs/Pdf_templatesAvgOrderByAggregateInput";
import { Pdf_templatesCountOrderByAggregateInput } from "../inputs/Pdf_templatesCountOrderByAggregateInput";
import { Pdf_templatesMaxOrderByAggregateInput } from "../inputs/Pdf_templatesMaxOrderByAggregateInput";
import { Pdf_templatesMinOrderByAggregateInput } from "../inputs/Pdf_templatesMinOrderByAggregateInput";
import { Pdf_templatesSumOrderByAggregateInput } from "../inputs/Pdf_templatesSumOrderByAggregateInput";
export declare class Pdf_templatesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    assigned_to?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    active?: "asc" | "desc" | undefined;
    page_size?: "asc" | "desc" | undefined;
    orientation?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    header?: "asc" | "desc" | undefined;
    footer?: "asc" | "desc" | undefined;
    margin_left?: "asc" | "desc" | undefined;
    margin_right?: "asc" | "desc" | undefined;
    margin_top?: "asc" | "desc" | undefined;
    margin_bottom?: "asc" | "desc" | undefined;
    margin_header?: "asc" | "desc" | undefined;
    margin_footer?: "asc" | "desc" | undefined;
    _count?: Pdf_templatesCountOrderByAggregateInput | undefined;
    _avg?: Pdf_templatesAvgOrderByAggregateInput | undefined;
    _max?: Pdf_templatesMaxOrderByAggregateInput | undefined;
    _min?: Pdf_templatesMinOrderByAggregateInput | undefined;
    _sum?: Pdf_templatesSumOrderByAggregateInput | undefined;
}
