import { GraphQLResolveInfo } from "graphql";
import { DeleteManyInvitationsArgs } from "./args/DeleteManyInvitationsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyInvitationsResolver {
    deleteManyInvitations(ctx: any, info: GraphQLResolveInfo, args: DeleteManyInvitationsArgs): Promise<AffectedRowsOutput>;
}
