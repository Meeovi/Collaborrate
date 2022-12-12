import { GraphQLResolveInfo } from "graphql";
import { AggregateSchedulerArgs } from "./args/AggregateSchedulerArgs";
import { AggregateScheduler } from "../../outputs/AggregateScheduler";
export declare class AggregateSchedulerResolver {
    aggregateScheduler(ctx: any, info: GraphQLResolveInfo, args: AggregateSchedulerArgs): Promise<AggregateScheduler>;
}
