import { GraphQLResolveInfo } from "graphql";
import { CreateManyKnowledgebaseArgs } from "./args/CreateManyKnowledgebaseArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyKnowledgebaseResolver {
    createManyKnowledgebase(ctx: any, info: GraphQLResolveInfo, args: CreateManyKnowledgebaseArgs): Promise<AffectedRowsOutput>;
}
