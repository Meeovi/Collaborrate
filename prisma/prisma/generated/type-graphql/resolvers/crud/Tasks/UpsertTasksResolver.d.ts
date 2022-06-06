import { GraphQLResolveInfo } from "graphql";
import { UpsertTasksArgs } from "./args/UpsertTasksArgs";
import { Tasks } from "../../../models/Tasks";
export declare class UpsertTasksResolver {
    upsertTasks(ctx: any, info: GraphQLResolveInfo, args: UpsertTasksArgs): Promise<Tasks>;
}
