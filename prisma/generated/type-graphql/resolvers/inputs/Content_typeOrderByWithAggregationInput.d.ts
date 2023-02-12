import { Content_typeAvgOrderByAggregateInput } from "../inputs/Content_typeAvgOrderByAggregateInput";
import { Content_typeCountOrderByAggregateInput } from "../inputs/Content_typeCountOrderByAggregateInput";
import { Content_typeMaxOrderByAggregateInput } from "../inputs/Content_typeMaxOrderByAggregateInput";
import { Content_typeMinOrderByAggregateInput } from "../inputs/Content_typeMinOrderByAggregateInput";
import { Content_typeSumOrderByAggregateInput } from "../inputs/Content_typeSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class Content_typeOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    text?: SortOrderInput | undefined;
    number?: SortOrderInput | undefined;
    link?: SortOrderInput | undefined;
    email?: SortOrderInput | undefined;
    uid?: SortOrderInput | undefined;
    date?: SortOrderInput | undefined;
    time?: SortOrderInput | undefined;
    timestamp?: SortOrderInput | undefined;
    boolean?: SortOrderInput | undefined;
    rich_text?: SortOrderInput | undefined;
    password?: SortOrderInput | undefined;
    media?: SortOrderInput | undefined;
    database_name?: SortOrderInput | undefined;
    _count?: Content_typeCountOrderByAggregateInput | undefined;
    _avg?: Content_typeAvgOrderByAggregateInput | undefined;
    _max?: Content_typeMaxOrderByAggregateInput | undefined;
    _min?: Content_typeMinOrderByAggregateInput | undefined;
    _sum?: Content_typeSumOrderByAggregateInput | undefined;
}
