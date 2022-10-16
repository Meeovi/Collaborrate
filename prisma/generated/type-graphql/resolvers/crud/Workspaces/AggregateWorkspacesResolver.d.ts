import { GraphQLResolveInfo } from "graphql";
import { AggregateWorkspacesArgs } from "./args/AggregateWorkspacesArgs";
import { AggregateWorkspaces } from "../../outputs/AggregateWorkspaces";
export declare class AggregateWorkspacesResolver {
    aggregateWorkspaces(ctx: any, info: GraphQLResolveInfo, args: AggregateWorkspacesArgs): Promise<AggregateWorkspaces>;
}
