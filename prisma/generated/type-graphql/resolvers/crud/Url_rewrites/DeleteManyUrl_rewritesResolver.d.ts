import { GraphQLResolveInfo } from "graphql";
import { DeleteManyUrl_rewritesArgs } from "./args/DeleteManyUrl_rewritesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyUrl_rewritesResolver {
    deleteManyUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: DeleteManyUrl_rewritesArgs): Promise<AffectedRowsOutput>;
}
