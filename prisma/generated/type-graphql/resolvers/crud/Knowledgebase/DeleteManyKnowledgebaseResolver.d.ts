import { GraphQLResolveInfo } from "graphql";
import { DeleteManyKnowledgebaseArgs } from "./args/DeleteManyKnowledgebaseArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyKnowledgebaseResolver {
    deleteManyKnowledgebase(ctx: any, info: GraphQLResolveInfo, args: DeleteManyKnowledgebaseArgs): Promise<AffectedRowsOutput>;
}
