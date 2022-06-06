import { GraphQLResolveInfo } from "graphql";
import { FindUniqueKnowledgebaseArgs } from "./args/FindUniqueKnowledgebaseArgs";
import { Knowledgebase } from "../../../models/Knowledgebase";
export declare class FindUniqueKnowledgebaseResolver {
    knowledgebase(ctx: any, info: GraphQLResolveInfo, args: FindUniqueKnowledgebaseArgs): Promise<Knowledgebase | null>;
}
