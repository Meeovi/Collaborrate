import { GraphQLResolveInfo } from "graphql";
import { AggregateInvitationsArgs } from "./args/AggregateInvitationsArgs";
import { AggregateInvitations } from "../../outputs/AggregateInvitations";
export declare class AggregateInvitationsResolver {
    aggregateInvitations(ctx: any, info: GraphQLResolveInfo, args: AggregateInvitationsArgs): Promise<AggregateInvitations>;
}
