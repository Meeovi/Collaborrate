import { GraphQLResolveInfo } from "graphql";
import { UpdateOneInvitationsArgs } from "./args/UpdateOneInvitationsArgs";
import { Invitations } from "../../../models/Invitations";
export declare class UpdateOneInvitationsResolver {
    updateOneInvitations(ctx: any, info: GraphQLResolveInfo, args: UpdateOneInvitationsArgs): Promise<Invitations | null>;
}
