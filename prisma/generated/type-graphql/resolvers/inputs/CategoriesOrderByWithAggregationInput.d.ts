import { CategoriesAvgOrderByAggregateInput } from "../inputs/CategoriesAvgOrderByAggregateInput";
import { CategoriesCountOrderByAggregateInput } from "../inputs/CategoriesCountOrderByAggregateInput";
import { CategoriesMaxOrderByAggregateInput } from "../inputs/CategoriesMaxOrderByAggregateInput";
import { CategoriesMinOrderByAggregateInput } from "../inputs/CategoriesMinOrderByAggregateInput";
import { CategoriesSumOrderByAggregateInput } from "../inputs/CategoriesSumOrderByAggregateInput";
export declare class CategoriesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    thumbnail?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    visibility?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    websites?: "asc" | "desc" | undefined;
    product?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    meta_title?: "asc" | "desc" | undefined;
    meta_keywords?: "asc" | "desc" | undefined;
    meta_description?: "asc" | "desc" | undefined;
    meta_url?: "asc" | "desc" | undefined;
    workspaces?: "asc" | "desc" | undefined;
    _count?: CategoriesCountOrderByAggregateInput | undefined;
    _avg?: CategoriesAvgOrderByAggregateInput | undefined;
    _max?: CategoriesMaxOrderByAggregateInput | undefined;
    _min?: CategoriesMinOrderByAggregateInput | undefined;
    _sum?: CategoriesSumOrderByAggregateInput | undefined;
}
