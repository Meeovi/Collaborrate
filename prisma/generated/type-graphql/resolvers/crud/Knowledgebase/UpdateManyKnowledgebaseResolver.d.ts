import { GraphQLResolveInfo } from "graphql";
import { UpdateManyKnowledgebaseArgs } from "./args/UpdateManyKnowledgebaseArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyKnowledgebaseResolver {
    updateManyKnowledgebase(ctx: any, info: GraphQLResolveInfo, args: UpdateManyKnowledgebaseArgs): Promise<AffectedRowsOutput>;
}
