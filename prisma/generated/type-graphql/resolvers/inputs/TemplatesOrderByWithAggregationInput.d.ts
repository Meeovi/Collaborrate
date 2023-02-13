import { TemplatesAvgOrderByAggregateInput } from "../inputs/TemplatesAvgOrderByAggregateInput";
import { TemplatesCountOrderByAggregateInput } from "../inputs/TemplatesCountOrderByAggregateInput";
import { TemplatesMaxOrderByAggregateInput } from "../inputs/TemplatesMaxOrderByAggregateInput";
import { TemplatesMinOrderByAggregateInput } from "../inputs/TemplatesMinOrderByAggregateInput";
import { TemplatesSumOrderByAggregateInput } from "../inputs/TemplatesSumOrderByAggregateInput";
export declare class TemplatesOrderByWithAggregationInput {
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
    _count?: TemplatesCountOrderByAggregateInput | undefined;
    _avg?: TemplatesAvgOrderByAggregateInput | undefined;
    _max?: TemplatesMaxOrderByAggregateInput | undefined;
    _min?: TemplatesMinOrderByAggregateInput | undefined;
    _sum?: TemplatesSumOrderByAggregateInput | undefined;
}
