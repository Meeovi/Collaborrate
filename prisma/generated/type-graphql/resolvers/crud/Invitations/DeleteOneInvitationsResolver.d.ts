import { GraphQLResolveInfo } from "graphql";
import { DeleteOneInvitationsArgs } from "./args/DeleteOneInvitationsArgs";
import { Invitations } from "../../../models/Invitations";
export declare class DeleteOneInvitationsResolver {
    deleteOneInvitations(ctx: any, info: GraphQLResolveInfo, args: DeleteOneInvitationsArgs): Promise<Invitations | null>;
}
