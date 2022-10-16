import { GraphQLResolveInfo } from "graphql";
import { GroupByTicketingArgs } from "./args/GroupByTicketingArgs";
import { TicketingGroupBy } from "../../outputs/TicketingGroupBy";
export declare class GroupByTicketingResolver {
    groupByTicketing(ctx: any, info: GraphQLResolveInfo, args: GroupByTicketingArgs): Promise<TicketingGroupBy[]>;
}
