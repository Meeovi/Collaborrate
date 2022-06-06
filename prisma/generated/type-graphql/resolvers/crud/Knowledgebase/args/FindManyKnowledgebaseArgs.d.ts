import { KnowledgebaseOrderByWithRelationInput } from "../../../inputs/KnowledgebaseOrderByWithRelationInput";
import { KnowledgebaseWhereInput } from "../../../inputs/KnowledgebaseWhereInput";
import { KnowledgebaseWhereUniqueInput } from "../../../inputs/KnowledgebaseWhereUniqueInput";
export declare class FindManyKnowledgebaseArgs {
    where?: KnowledgebaseWhereInput | undefined;
    orderBy?: KnowledgebaseOrderByWithRelationInput[] | undefined;
    cursor?: KnowledgebaseWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "status" | "revision" | "content" | "resolution" | "author" | "approver" | "date_modified"> | undefined;
}
