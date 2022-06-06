import { GraphQLResolveInfo } from "graphql";
import { GroupByTasksArgs } from "./args/GroupByTasksArgs";
import { TasksGroupBy } from "../../outputs/TasksGroupBy";
export declare class GroupByTasksResolver {
    groupByTasks(ctx: any, info: GraphQLResolveInfo, args: GroupByTasksArgs): Promise<TasksGroupBy[]>;
}
