import { GraphQLResolveInfo } from "graphql";
import { UpdateManyWorkspacesArgs } from "./args/UpdateManyWorkspacesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyWorkspacesResolver {
    updateManyWorkspaces(ctx: any, info: GraphQLResolveInfo, args: UpdateManyWorkspacesArgs): Promise<AffectedRowsOutput>;
}
