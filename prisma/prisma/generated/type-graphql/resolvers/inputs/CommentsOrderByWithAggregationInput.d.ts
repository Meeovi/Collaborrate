import { CommentsAvgOrderByAggregateInput } from "../inputs/CommentsAvgOrderByAggregateInput";
import { CommentsCountOrderByAggregateInput } from "../inputs/CommentsCountOrderByAggregateInput";
import { CommentsMaxOrderByAggregateInput } from "../inputs/CommentsMaxOrderByAggregateInput";
import { CommentsMinOrderByAggregateInput } from "../inputs/CommentsMinOrderByAggregateInput";
import { CommentsSumOrderByAggregateInput } from "../inputs/CommentsSumOrderByAggregateInput";
export declare class CommentsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    customer_name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    response?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    cust_id?: "asc" | "desc" | undefined;
    _count?: CommentsCountOrderByAggregateInput | undefined;
    _avg?: CommentsAvgOrderByAggregateInput | undefined;
    _max?: CommentsMaxOrderByAggregateInput | undefined;
    _min?: CommentsMinOrderByAggregateInput | undefined;
    _sum?: CommentsSumOrderByAggregateInput | undefined;
}
