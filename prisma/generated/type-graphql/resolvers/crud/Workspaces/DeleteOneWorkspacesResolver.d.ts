import { GraphQLResolveInfo } from "graphql";
import { DeleteOneWorkspacesArgs } from "./args/DeleteOneWorkspacesArgs";
import { Workspaces } from "../../../models/Workspaces";
export declare class DeleteOneWorkspacesResolver {
    deleteOneWorkspaces(ctx: any, info: GraphQLResolveInfo, args: DeleteOneWorkspacesArgs): Promise<Workspaces | null>;
}
