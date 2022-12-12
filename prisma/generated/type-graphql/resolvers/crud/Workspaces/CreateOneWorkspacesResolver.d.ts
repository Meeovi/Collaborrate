import { GraphQLResolveInfo } from "graphql";
import { CreateOneWorkspacesArgs } from "./args/CreateOneWorkspacesArgs";
import { Workspaces } from "../../../models/Workspaces";
export declare class CreateOneWorkspacesResolver {
    createOneWorkspaces(ctx: any, info: GraphQLResolveInfo, args: CreateOneWorkspacesArgs): Promise<Workspaces>;
}
