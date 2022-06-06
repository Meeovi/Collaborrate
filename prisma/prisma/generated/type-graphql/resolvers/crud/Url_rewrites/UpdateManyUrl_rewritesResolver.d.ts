import { GraphQLResolveInfo } from "graphql";
import { UpdateManyUrl_rewritesArgs } from "./args/UpdateManyUrl_rewritesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyUrl_rewritesResolver {
    updateManyUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: UpdateManyUrl_rewritesArgs): Promise<AffectedRowsOutput>;
}
