import { GraphQLResolveInfo } from "graphql";
import { CreateOneInvitationsArgs } from "./args/CreateOneInvitationsArgs";
import { Invitations } from "../../../models/Invitations";
export declare class CreateOneInvitationsResolver {
    createOneInvitations(ctx: any, info: GraphQLResolveInfo, args: CreateOneInvitationsArgs): Promise<Invitations>;
}
