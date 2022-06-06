import { KnowledgebaseAvgOrderByAggregateInput } from "../inputs/KnowledgebaseAvgOrderByAggregateInput";
import { KnowledgebaseCountOrderByAggregateInput } from "../inputs/KnowledgebaseCountOrderByAggregateInput";
import { KnowledgebaseMaxOrderByAggregateInput } from "../inputs/KnowledgebaseMaxOrderByAggregateInput";
import { KnowledgebaseMinOrderByAggregateInput } from "../inputs/KnowledgebaseMinOrderByAggregateInput";
import { KnowledgebaseSumOrderByAggregateInput } from "../inputs/KnowledgebaseSumOrderByAggregateInput";
export declare class KnowledgebaseOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    revision?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    resolution?: "asc" | "desc" | undefined;
    author?: "asc" | "desc" | undefined;
    approver?: "asc" | "desc" | undefined;
    date_modified?: "asc" | "desc" | undefined;
    _count?: KnowledgebaseCountOrderByAggregateInput | undefined;
    _avg?: KnowledgebaseAvgOrderByAggregateInput | undefined;
    _max?: KnowledgebaseMaxOrderByAggregateInput | undefined;
    _min?: KnowledgebaseMinOrderByAggregateInput | undefined;
    _sum?: KnowledgebaseSumOrderByAggregateInput | undefined;
}
