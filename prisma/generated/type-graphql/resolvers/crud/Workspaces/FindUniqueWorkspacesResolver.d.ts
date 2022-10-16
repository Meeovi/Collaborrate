import { GraphQLResolveInfo } from "graphql";
import { FindUniqueWorkspacesArgs } from "./args/FindUniqueWorkspacesArgs";
import { Workspaces } from "../../../models/Workspaces";
export declare class FindUniqueWorkspacesResolver {
    findUniqueWorkspaces(ctx: any, info: GraphQLResolveInfo, args: FindUniqueWorkspacesArgs): Promise<Workspaces | null>;
}
