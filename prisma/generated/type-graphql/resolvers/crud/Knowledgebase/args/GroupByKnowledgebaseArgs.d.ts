import { KnowledgebaseOrderByWithAggregationInput } from "../../../inputs/KnowledgebaseOrderByWithAggregationInput";
import { KnowledgebaseScalarWhereWithAggregatesInput } from "../../../inputs/KnowledgebaseScalarWhereWithAggregatesInput";
import { KnowledgebaseWhereInput } from "../../../inputs/KnowledgebaseWhereInput";
export declare class GroupByKnowledgebaseArgs {
    where?: KnowledgebaseWhereInput | undefined;
    orderBy?: KnowledgebaseOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "status" | "revision" | "content" | "resolution" | "author" | "approver" | "date_modified">;
    having?: KnowledgebaseScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
