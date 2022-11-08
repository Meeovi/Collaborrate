import { GraphQLResolveInfo } from "graphql";
import { AggregateTicketingArgs } from "./args/AggregateTicketingArgs";
import { AggregateTicketing } from "../../outputs/AggregateTicketing";
export declare class AggregateTicketingResolver {
    aggregateTicketing(ctx: any, info: GraphQLResolveInfo, args: AggregateTicketingArgs): Promise<AggregateTicketing>;
}
