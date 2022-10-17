import { GraphQLResolveInfo } from "graphql";
import { CreateManyInvitationsArgs } from "./args/CreateManyInvitationsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyInvitationsResolver {
    createManyInvitations(ctx: any, info: GraphQLResolveInfo, args: CreateManyInvitationsArgs): Promise<AffectedRowsOutput>;
}
