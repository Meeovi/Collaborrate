import { Content_typeAvgOrderByAggregateInput } from "../inputs/Content_typeAvgOrderByAggregateInput";
import { Content_typeCountOrderByAggregateInput } from "../inputs/Content_typeCountOrderByAggregateInput";
import { Content_typeMaxOrderByAggregateInput } from "../inputs/Content_typeMaxOrderByAggregateInput";
import { Content_typeMinOrderByAggregateInput } from "../inputs/Content_typeMinOrderByAggregateInput";
import { Content_typeSumOrderByAggregateInput } from "../inputs/Content_typeSumOrderByAggregateInput";
export declare class Content_typeOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    text?: "asc" | "desc" | undefined;
    number?: "asc" | "desc" | undefined;
    json?: "asc" | "desc" | undefined;
    link?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    uid?: "asc" | "desc" | undefined;
    date?: "asc" | "desc" | undefined;
    time?: "asc" | "desc" | undefined;
    timestamp?: "asc" | "desc" | undefined;
    boolean?: "asc" | "desc" | undefined;
    rich_text?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    media?: "asc" | "desc" | undefined;
    database_name?: "asc" | "desc" | undefined;
    _count?: Content_typeCountOrderByAggregateInput | undefined;
    _avg?: Content_typeAvgOrderByAggregateInput | undefined;
    _max?: Content_typeMaxOrderByAggregateInput | undefined;
    _min?: Content_typeMinOrderByAggregateInput | undefined;
    _sum?: Content_typeSumOrderByAggregateInput | undefined;
}
