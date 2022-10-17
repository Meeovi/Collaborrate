import { GraphQLResolveInfo } from "graphql";
import { GroupByWorkspacesArgs } from "./args/GroupByWorkspacesArgs";
import { WorkspacesGroupBy } from "../../outputs/WorkspacesGroupBy";
export declare class GroupByWorkspacesResolver {
    groupByWorkspaces(ctx: any, info: GraphQLResolveInfo, args: GroupByWorkspacesArgs): Promise<WorkspacesGroupBy[]>;
}
