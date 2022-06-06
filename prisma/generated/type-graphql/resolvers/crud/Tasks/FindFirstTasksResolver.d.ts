import { GraphQLResolveInfo } from "graphql";
import { FindFirstTasksArgs } from "./args/FindFirstTasksArgs";
import { Tasks } from "../../../models/Tasks";
export declare class FindFirstTasksResolver {
    findFirstTasks(ctx: any, info: GraphQLResolveInfo, args: FindFirstTasksArgs): Promise<Tasks | null>;
}
