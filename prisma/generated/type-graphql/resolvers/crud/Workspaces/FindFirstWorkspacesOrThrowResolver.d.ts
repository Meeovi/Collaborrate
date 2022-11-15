import { GraphQLResolveInfo } from "graphql";
import { FindFirstWorkspacesOrThrowArgs } from "./args/FindFirstWorkspacesOrThrowArgs";
import { Workspaces } from "../../../models/Workspaces";
export declare class FindFirstWorkspacesOrThrowResolver {
    findFirstWorkspacesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstWorkspacesOrThrowArgs): Promise<Workspaces | null>;
}
