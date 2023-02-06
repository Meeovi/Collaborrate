import { CollectionsAvgOrderByAggregateInput } from "../inputs/CollectionsAvgOrderByAggregateInput";
import { CollectionsCountOrderByAggregateInput } from "../inputs/CollectionsCountOrderByAggregateInput";
import { CollectionsMaxOrderByAggregateInput } from "../inputs/CollectionsMaxOrderByAggregateInput";
import { CollectionsMinOrderByAggregateInput } from "../inputs/CollectionsMinOrderByAggregateInput";
import { CollectionsSumOrderByAggregateInput } from "../inputs/CollectionsSumOrderByAggregateInput";
export declare class CollectionsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    product?: "asc" | "desc" | undefined;
    meta_title?: "asc" | "desc" | undefined;
    meta_keywords?: "asc" | "desc" | undefined;
    meta_description?: "asc" | "desc" | undefined;
    _count?: CollectionsCountOrderByAggregateInput | undefined;
    _avg?: CollectionsAvgOrderByAggregateInput | undefined;
    _max?: CollectionsMaxOrderByAggregateInput | undefined;
    _min?: CollectionsMinOrderByAggregateInput | undefined;
    _sum?: CollectionsSumOrderByAggregateInput | undefined;
}
