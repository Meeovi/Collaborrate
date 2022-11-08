import { GraphQLResolveInfo } from "graphql";
import { UpsertOneSchedulerArgs } from "./args/UpsertOneSchedulerArgs";
import { Scheduler } from "../../../models/Scheduler";
export declare class UpsertOneSchedulerResolver {
    upsertOneScheduler(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSchedulerArgs): Promise<Scheduler>;
}
