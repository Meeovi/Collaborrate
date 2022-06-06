import { GraphQLResolveInfo } from "graphql";
import { FindManyTasksArgs } from "./args/FindManyTasksArgs";
import { Tasks } from "../../../models/Tasks";
export declare class FindManyTasksResolver {
    findManyTasks(ctx: any, info: GraphQLResolveInfo, args: FindManyTasksArgs): Promise<Tasks[]>;
}
