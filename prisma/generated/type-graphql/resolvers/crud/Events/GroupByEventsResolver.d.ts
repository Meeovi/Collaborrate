import { GraphQLResolveInfo } from "graphql";
import { GroupByEventsArgs } from "./args/GroupByEventsArgs";
import { EventsGroupBy } from "../../outputs/EventsGroupBy";
export declare class GroupByEventsResolver {
    groupByEvents(ctx: any, info: GraphQLResolveInfo, args: GroupByEventsArgs): Promise<EventsGroupBy[]>;
}
