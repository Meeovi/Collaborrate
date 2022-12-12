import { GraphQLResolveInfo } from "graphql";
import { CreateManyWorkspacesArgs } from "./args/CreateManyWorkspacesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyWorkspacesResolver {
    createManyWorkspaces(ctx: any, info: GraphQLResolveInfo, args: CreateManyWorkspacesArgs): Promise<AffectedRowsOutput>;
}
