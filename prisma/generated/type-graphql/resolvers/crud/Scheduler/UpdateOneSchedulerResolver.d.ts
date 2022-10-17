import { GraphQLResolveInfo } from "graphql";
import { UpdateOneSchedulerArgs } from "./args/UpdateOneSchedulerArgs";
import { Scheduler } from "../../../models/Scheduler";
export declare class UpdateOneSchedulerResolver {
    updateOneScheduler(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSchedulerArgs): Promise<Scheduler | null>;
}
