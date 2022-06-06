import { GraphQLResolveInfo } from "graphql";
import { FindFirstKnowledgebaseArgs } from "./args/FindFirstKnowledgebaseArgs";
import { Knowledgebase } from "../../../models/Knowledgebase";
export declare class FindFirstKnowledgebaseResolver {
    findFirstKnowledgebase(ctx: any, info: GraphQLResolveInfo, args: FindFirstKnowledgebaseArgs): Promise<Knowledgebase | null>;
}
