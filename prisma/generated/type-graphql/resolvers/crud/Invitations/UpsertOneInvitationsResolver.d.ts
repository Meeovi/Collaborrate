import { GraphQLResolveInfo } from "graphql";
import { UpsertOneInvitationsArgs } from "./args/UpsertOneInvitationsArgs";
import { Invitations } from "../../../models/Invitations";
export declare class UpsertOneInvitationsResolver {
    upsertOneInvitations(ctx: any, info: GraphQLResolveInfo, args: UpsertOneInvitationsArgs): Promise<Invitations>;
}
