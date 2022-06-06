import { GraphQLResolveInfo } from "graphql";
import { CreateTasksArgs } from "./args/CreateTasksArgs";
import { Tasks } from "../../../models/Tasks";
export declare class CreateTasksResolver {
    createTasks(ctx: any, info: GraphQLResolveInfo, args: CreateTasksArgs): Promise<Tasks>;
}
