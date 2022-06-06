import { GraphQLResolveInfo } from "graphql";
import { CreateKnowledgebaseArgs } from "./args/CreateKnowledgebaseArgs";
import { Knowledgebase } from "../../../models/Knowledgebase";
export declare class CreateKnowledgebaseResolver {
    createKnowledgebase(ctx: any, info: GraphQLResolveInfo, args: CreateKnowledgebaseArgs): Promise<Knowledgebase>;
}
