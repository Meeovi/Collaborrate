import { CollectionsAvgOrderByAggregateInput } from "../inputs/CollectionsAvgOrderByAggregateInput";
import { CollectionsCountOrderByAggregateInput } from "../inputs/CollectionsCountOrderByAggregateInput";
import { CollectionsMaxOrderByAggregateInput } from "../inputs/CollectionsMaxOrderByAggregateInput";
import { CollectionsMinOrderByAggregateInput } from "../inputs/CollectionsMinOrderByAggregateInput";
import { CollectionsSumOrderByAggregateInput } from "../inputs/CollectionsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class CollectionsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: SortOrderInput | undefined;
    name?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    product?: SortOrderInput | undefined;
    meta_title?: SortOrderInput | undefined;
    meta_keywords?: SortOrderInput | undefined;
    meta_description?: SortOrderInput | undefined;
    _count?: CollectionsCountOrderByAggregateInput | undefined;
    _avg?: CollectionsAvgOrderByAggregateInput | undefined;
    _max?: CollectionsMaxOrderByAggregateInput | undefined;
    _min?: CollectionsMinOrderByAggregateInput | undefined;
    _sum?: CollectionsSumOrderByAggregateInput | undefined;
}
