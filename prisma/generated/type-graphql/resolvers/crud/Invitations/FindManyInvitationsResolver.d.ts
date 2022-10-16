import { GraphQLResolveInfo } from "graphql";
import { FindManyInvitationsArgs } from "./args/FindManyInvitationsArgs";
import { Invitations } from "../../../models/Invitations";
export declare class FindManyInvitationsResolver {
    findManyInvitations(ctx: any, info: GraphQLResolveInfo, args: FindManyInvitationsArgs): Promise<Invitations[]>;
}
