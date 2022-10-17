import { GraphQLResolveInfo } from "graphql";
import { FindFirstInvitationsArgs } from "./args/FindFirstInvitationsArgs";
import { Invitations } from "../../../models/Invitations";
export declare class FindFirstInvitationsResolver {
    findFirstInvitations(ctx: any, info: GraphQLResolveInfo, args: FindFirstInvitationsArgs): Promise<Invitations | null>;
}
