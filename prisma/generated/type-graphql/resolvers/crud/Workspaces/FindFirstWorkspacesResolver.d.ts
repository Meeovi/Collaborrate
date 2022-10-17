import { GraphQLResolveInfo } from "graphql";
import { FindFirstWorkspacesArgs } from "./args/FindFirstWorkspacesArgs";
import { Workspaces } from "../../../models/Workspaces";
export declare class FindFirstWorkspacesResolver {
    findFirstWorkspaces(ctx: any, info: GraphQLResolveInfo, args: FindFirstWorkspacesArgs): Promise<Workspaces | null>;
}
