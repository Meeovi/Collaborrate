import { GraphQLResolveInfo } from "graphql";
import { FindUniqueWorkspacesOrThrowArgs } from "./args/FindUniqueWorkspacesOrThrowArgs";
import { Workspaces } from "../../../models/Workspaces";
export declare class FindUniqueWorkspacesOrThrowResolver {
    findUniqueWorkspacesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueWorkspacesOrThrowArgs): Promise<Workspaces | null>;
}
