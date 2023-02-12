import { SortOrderInput } from "../inputs/SortOrderInput";
import { TagsAvgOrderByAggregateInput } from "../inputs/TagsAvgOrderByAggregateInput";
import { TagsCountOrderByAggregateInput } from "../inputs/TagsCountOrderByAggregateInput";
import { TagsMaxOrderByAggregateInput } from "../inputs/TagsMaxOrderByAggregateInput";
import { TagsMinOrderByAggregateInput } from "../inputs/TagsMinOrderByAggregateInput";
import { TagsSumOrderByAggregateInput } from "../inputs/TagsSumOrderByAggregateInput";
export declare class TagsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    excerpt?: SortOrderInput | undefined;
    categories?: SortOrderInput | undefined;
    articles?: SortOrderInput | undefined;
    products?: SortOrderInput | undefined;
    customers?: SortOrderInput | undefined;
    users?: SortOrderInput | undefined;
    _count?: TagsCountOrderByAggregateInput | undefined;
    _avg?: TagsAvgOrderByAggregateInput | undefined;
    _max?: TagsMaxOrderByAggregateInput | undefined;
    _min?: TagsMinOrderByAggregateInput | undefined;
    _sum?: TagsSumOrderByAggregateInput | undefined;
}
