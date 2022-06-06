import { KnowledgebaseCreateInput } from "../../../inputs/KnowledgebaseCreateInput";
import { KnowledgebaseUpdateInput } from "../../../inputs/KnowledgebaseUpdateInput";
import { KnowledgebaseWhereUniqueInput } from "../../../inputs/KnowledgebaseWhereUniqueInput";
export declare class UpsertKnowledgebaseArgs {
    where: KnowledgebaseWhereUniqueInput;
    create: KnowledgebaseCreateInput;
    update: KnowledgebaseUpdateInput;
}
