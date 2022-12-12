import { ArticlesAvgOrderByAggregateInput } from "../inputs/ArticlesAvgOrderByAggregateInput";
import { ArticlesCountOrderByAggregateInput } from "../inputs/ArticlesCountOrderByAggregateInput";
import { ArticlesMaxOrderByAggregateInput } from "../inputs/ArticlesMaxOrderByAggregateInput";
import { ArticlesMinOrderByAggregateInput } from "../inputs/ArticlesMinOrderByAggregateInput";
import { ArticlesSumOrderByAggregateInput } from "../inputs/ArticlesSumOrderByAggregateInput";
export declare class ArticlesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    excerpt?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    categories?: "asc" | "desc" | undefined;
    customers?: "asc" | "desc" | undefined;
    users?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    isPublic?: "asc" | "desc" | undefined;
    meta_description?: "asc" | "desc" | undefined;
    meta_name?: "asc" | "desc" | undefined;
    meta_url?: "asc" | "desc" | undefined;
    tags?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    _count?: ArticlesCountOrderByAggregateInput | undefined;
    _avg?: ArticlesAvgOrderByAggregateInput | undefined;
    _max?: ArticlesMaxOrderByAggregateInput | undefined;
    _min?: ArticlesMinOrderByAggregateInput | undefined;
    _sum?: ArticlesSumOrderByAggregateInput | undefined;
}
