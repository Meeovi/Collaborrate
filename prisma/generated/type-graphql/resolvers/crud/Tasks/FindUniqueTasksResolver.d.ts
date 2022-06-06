import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTasksArgs } from "./args/FindUniqueTasksArgs";
import { Tasks } from "../../../models/Tasks";
export declare class FindUniqueTasksResolver {
    findUniqueTasks(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTasksArgs): Promise<Tasks | null>;
}
