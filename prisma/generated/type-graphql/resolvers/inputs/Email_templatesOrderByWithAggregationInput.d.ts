import { Email_templatesAvgOrderByAggregateInput } from "../inputs/Email_templatesAvgOrderByAggregateInput";
import { Email_templatesCountOrderByAggregateInput } from "../inputs/Email_templatesCountOrderByAggregateInput";
import { Email_templatesMaxOrderByAggregateInput } from "../inputs/Email_templatesMaxOrderByAggregateInput";
import { Email_templatesMinOrderByAggregateInput } from "../inputs/Email_templatesMinOrderByAggregateInput";
import { Email_templatesSumOrderByAggregateInput } from "../inputs/Email_templatesSumOrderByAggregateInput";
export declare class Email_templatesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    assigned_to?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    active?: "asc" | "desc" | undefined;
    insert_variable?: "asc" | "desc" | undefined;
    subject?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    header?: "asc" | "desc" | undefined;
    footer?: "asc" | "desc" | undefined;
    width?: "asc" | "desc" | undefined;
    height?: "asc" | "desc" | undefined;
    media?: "asc" | "desc" | undefined;
    _count?: Email_templatesCountOrderByAggregateInput | undefined;
    _avg?: Email_templatesAvgOrderByAggregateInput | undefined;
    _max?: Email_templatesMaxOrderByAggregateInput | undefined;
    _min?: Email_templatesMinOrderByAggregateInput | undefined;
    _sum?: Email_templatesSumOrderByAggregateInput | undefined;
}
