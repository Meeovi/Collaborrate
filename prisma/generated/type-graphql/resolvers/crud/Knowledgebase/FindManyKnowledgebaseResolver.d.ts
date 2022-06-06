import { GraphQLResolveInfo } from "graphql";
import { FindManyKnowledgebaseArgs } from "./args/FindManyKnowledgebaseArgs";
import { Knowledgebase } from "../../../models/Knowledgebase";
export declare class FindManyKnowledgebaseResolver {
    knowledgebases(ctx: any, info: GraphQLResolveInfo, args: FindManyKnowledgebaseArgs): Promise<Knowledgebase[]>;
}
