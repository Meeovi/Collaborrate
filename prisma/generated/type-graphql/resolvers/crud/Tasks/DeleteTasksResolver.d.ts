import { GraphQLResolveInfo } from "graphql";
import { DeleteTasksArgs } from "./args/DeleteTasksArgs";
import { Tasks } from "../../../models/Tasks";
export declare class DeleteTasksResolver {
    deleteTasks(ctx: any, info: GraphQLResolveInfo, args: DeleteTasksArgs): Promise<Tasks | null>;
}
