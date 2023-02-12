import { CategoriesAvgOrderByAggregateInput } from "../inputs/CategoriesAvgOrderByAggregateInput";
import { CategoriesCountOrderByAggregateInput } from "../inputs/CategoriesCountOrderByAggregateInput";
import { CategoriesMaxOrderByAggregateInput } from "../inputs/CategoriesMaxOrderByAggregateInput";
import { CategoriesMinOrderByAggregateInput } from "../inputs/CategoriesMinOrderByAggregateInput";
import { CategoriesSumOrderByAggregateInput } from "../inputs/CategoriesSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class CategoriesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    thumbnail?: SortOrderInput | undefined;
    name?: "asc" | "desc" | undefined;
    visibility?: SortOrderInput | undefined;
    status?: SortOrderInput | undefined;
    websites?: SortOrderInput | undefined;
    product?: SortOrderInput | undefined;
    country?: SortOrderInput | undefined;
    description?: SortOrderInput | undefined;
    content?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    meta_title?: SortOrderInput | undefined;
    meta_keywords?: SortOrderInput | undefined;
    meta_description?: SortOrderInput | undefined;
    meta_url?: SortOrderInput | undefined;
    workspaces?: SortOrderInput | undefined;
    _count?: CategoriesCountOrderByAggregateInput | undefined;
    _avg?: CategoriesAvgOrderByAggregateInput | undefined;
    _max?: CategoriesMaxOrderByAggregateInput | undefined;
    _min?: CategoriesMinOrderByAggregateInput | undefined;
    _sum?: CategoriesSumOrderByAggregateInput | undefined;
}
