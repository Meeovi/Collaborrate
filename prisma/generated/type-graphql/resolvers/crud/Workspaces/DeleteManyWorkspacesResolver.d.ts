import { GraphQLResolveInfo } from "graphql";
import { DeleteManyWorkspacesArgs } from "./args/DeleteManyWorkspacesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyWorkspacesResolver {
    deleteManyWorkspaces(ctx: any, info: GraphQLResolveInfo, args: DeleteManyWorkspacesArgs): Promise<AffectedRowsOutput>;
}
