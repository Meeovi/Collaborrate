import { GraphQLResolveInfo } from "graphql";
import { FindUniqueInvitationsArgs } from "./args/FindUniqueInvitationsArgs";
import { Invitations } from "../../../models/Invitations";
export declare class FindUniqueInvitationsResolver {
    findUniqueInvitations(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInvitationsArgs): Promise<Invitations | null>;
}
