import { GraphQLResolveInfo } from "graphql";
import { FindManyWorkspacesArgs } from "./args/FindManyWorkspacesArgs";
import { Workspaces } from "../../../models/Workspaces";
export declare class FindManyWorkspacesResolver {
    findManyWorkspaces(ctx: any, info: GraphQLResolveInfo, args: FindManyWorkspacesArgs): Promise<Workspaces[]>;
}
