import { GraphQLResolveInfo } from "graphql";
import { AggregateEventsArgs } from "./args/AggregateEventsArgs";
import { AggregateEvents } from "../../outputs/AggregateEvents";
export declare class AggregateEventsResolver {
    aggregateEvents(ctx: any, info: GraphQLResolveInfo, args: AggregateEventsArgs): Promise<AggregateEvents>;
}
