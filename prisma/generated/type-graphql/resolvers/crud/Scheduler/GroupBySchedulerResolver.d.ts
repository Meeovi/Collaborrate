import { GraphQLResolveInfo } from "graphql";
import { GroupBySchedulerArgs } from "./args/GroupBySchedulerArgs";
import { SchedulerGroupBy } from "../../outputs/SchedulerGroupBy";
export declare class GroupBySchedulerResolver {
    groupByScheduler(ctx: any, info: GraphQLResolveInfo, args: GroupBySchedulerArgs): Promise<SchedulerGroupBy[]>;
}
