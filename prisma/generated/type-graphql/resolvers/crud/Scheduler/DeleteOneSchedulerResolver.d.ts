import { GraphQLResolveInfo } from "graphql";
import { DeleteOneSchedulerArgs } from "./args/DeleteOneSchedulerArgs";
import { Scheduler } from "../../../models/Scheduler";
export declare class DeleteOneSchedulerResolver {
    deleteOneScheduler(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSchedulerArgs): Promise<Scheduler | null>;
}
