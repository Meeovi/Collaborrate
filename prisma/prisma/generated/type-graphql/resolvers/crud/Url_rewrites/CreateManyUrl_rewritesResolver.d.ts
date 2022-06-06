import { GraphQLResolveInfo } from "graphql";
import { CreateManyUrl_rewritesArgs } from "./args/CreateManyUrl_rewritesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyUrl_rewritesResolver {
    createManyUrl_rewrites(ctx: any, info: GraphQLResolveInfo, args: CreateManyUrl_rewritesArgs): Promise<AffectedRowsOutput>;
}
