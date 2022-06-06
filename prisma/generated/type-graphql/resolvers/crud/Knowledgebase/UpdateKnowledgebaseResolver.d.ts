import { GraphQLResolveInfo } from "graphql";
import { UpdateKnowledgebaseArgs } from "./args/UpdateKnowledgebaseArgs";
import { Knowledgebase } from "../../../models/Knowledgebase";
export declare class UpdateKnowledgebaseResolver {
    updateKnowledgebase(ctx: any, info: GraphQLResolveInfo, args: UpdateKnowledgebaseArgs): Promise<Knowledgebase | null>;
}
