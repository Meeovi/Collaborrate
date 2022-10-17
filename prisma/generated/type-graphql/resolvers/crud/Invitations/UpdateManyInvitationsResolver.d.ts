import { GraphQLResolveInfo } from "graphql";
import { UpdateManyInvitationsArgs } from "./args/UpdateManyInvitationsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyInvitationsResolver {
    updateManyInvitations(ctx: any, info: GraphQLResolveInfo, args: UpdateManyInvitationsArgs): Promise<AffectedRowsOutput>;
}
