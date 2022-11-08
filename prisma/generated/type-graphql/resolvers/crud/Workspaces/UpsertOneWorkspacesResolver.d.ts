import { GraphQLResolveInfo } from "graphql";
import { UpsertOneWorkspacesArgs } from "./args/UpsertOneWorkspacesArgs";
import { Workspaces } from "../../../models/Workspaces";
export declare class UpsertOneWorkspacesResolver {
    upsertOneWorkspaces(ctx: any, info: GraphQLResolveInfo, args: UpsertOneWorkspacesArgs): Promise<Workspaces>;
}
