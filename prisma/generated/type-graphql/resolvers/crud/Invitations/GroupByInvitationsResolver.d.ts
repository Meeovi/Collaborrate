import { GraphQLResolveInfo } from "graphql";
import { GroupByInvitationsArgs } from "./args/GroupByInvitationsArgs";
import { InvitationsGroupBy } from "../../outputs/InvitationsGroupBy";
export declare class GroupByInvitationsResolver {
    groupByInvitations(ctx: any, info: GraphQLResolveInfo, args: GroupByInvitationsArgs): Promise<InvitationsGroupBy[]>;
}
