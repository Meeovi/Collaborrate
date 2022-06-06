import { GraphQLResolveInfo } from "graphql";
import { UpdateTasksArgs } from "./args/UpdateTasksArgs";
import { Tasks } from "../../../models/Tasks";
export declare class UpdateTasksResolver {
    updateTasks(ctx: any, info: GraphQLResolveInfo, args: UpdateTasksArgs): Promise<Tasks | null>;
}
