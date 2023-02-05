import { TagsAvgOrderByAggregateInput } from "../inputs/TagsAvgOrderByAggregateInput";
import { TagsCountOrderByAggregateInput } from "../inputs/TagsCountOrderByAggregateInput";
import { TagsMaxOrderByAggregateInput } from "../inputs/TagsMaxOrderByAggregateInput";
import { TagsMinOrderByAggregateInput } from "../inputs/TagsMinOrderByAggregateInput";
import { TagsSumOrderByAggregateInput } from "../inputs/TagsSumOrderByAggregateInput";
export declare class TagsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    excerpt?: "asc" | "desc" | undefined;
    categories?: "asc" | "desc" | undefined;
    articles?: "asc" | "desc" | undefined;
    products?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    users?: "asc" | "desc" | undefined;
    _count?: TagsCountOrderByAggregateInput | undefined;
    _avg?: TagsAvgOrderByAggregateInput | undefined;
    _max?: TagsMaxOrderByAggregateInput | undefined;
    _min?: TagsMinOrderByAggregateInput | undefined;
    _sum?: TagsSumOrderByAggregateInput | undefined;
}
