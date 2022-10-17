import { GraphQLResolveInfo } from "graphql";
import { UpdateOneWorkspacesArgs } from "./args/UpdateOneWorkspacesArgs";
import { Workspaces } from "../../../models/Workspaces";
export declare class UpdateOneWorkspacesResolver {
    updateOneWorkspaces(ctx: any, info: GraphQLResolveInfo, args: UpdateOneWorkspacesArgs): Promise<Workspaces | null>;
}
