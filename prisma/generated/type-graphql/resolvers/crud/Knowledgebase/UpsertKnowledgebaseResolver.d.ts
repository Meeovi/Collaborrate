import { GraphQLResolveInfo } from "graphql";
import { UpsertKnowledgebaseArgs } from "./args/UpsertKnowledgebaseArgs";
import { Knowledgebase } from "../../../models/Knowledgebase";
export declare class UpsertKnowledgebaseResolver {
    upsertKnowledgebase(ctx: any, info: GraphQLResolveInfo, args: UpsertKnowledgebaseArgs): Promise<Knowledgebase>;
}
