import { GraphQLResolveInfo } from "graphql";
import { AggregateTasksArgs } from "./args/AggregateTasksArgs";
import { AggregateTasks } from "../../outputs/AggregateTasks";
export declare class AggregateTasksResolver {
    aggregateTasks(ctx: any, info: GraphQLResolveInfo, args: AggregateTasksArgs): Promise<AggregateTasks>;
}
