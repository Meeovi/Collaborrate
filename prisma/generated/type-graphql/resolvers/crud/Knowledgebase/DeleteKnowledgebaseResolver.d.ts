import { GraphQLResolveInfo } from "graphql";
import { DeleteKnowledgebaseArgs } from "./args/DeleteKnowledgebaseArgs";
import { Knowledgebase } from "../../../models/Knowledgebase";
export declare class DeleteKnowledgebaseResolver {
    deleteKnowledgebase(ctx: any, info: GraphQLResolveInfo, args: DeleteKnowledgebaseArgs): Promise<Knowledgebase | null>;
}
