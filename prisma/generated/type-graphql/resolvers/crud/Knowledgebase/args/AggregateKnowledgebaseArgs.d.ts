import { KnowledgebaseOrderByWithRelationInput } from "../../../inputs/KnowledgebaseOrderByWithRelationInput";
import { KnowledgebaseWhereInput } from "../../../inputs/KnowledgebaseWhereInput";
import { KnowledgebaseWhereUniqueInput } from "../../../inputs/KnowledgebaseWhereUniqueInput";
export declare class AggregateKnowledgebaseArgs {
    where?: KnowledgebaseWhereInput | undefined;
    orderBy?: KnowledgebaseOrderByWithRelationInput[] | undefined;
    cursor?: KnowledgebaseWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
