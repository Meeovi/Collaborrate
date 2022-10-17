import { GraphQLResolveInfo } from "graphql";
import { FindFirstSchedulerArgs } from "./args/FindFirstSchedulerArgs";
import { Scheduler } from "../../../models/Scheduler";
export declare class FindFirstSchedulerResolver {
    findFirstScheduler(ctx: any, info: GraphQLResolveInfo, args: FindFirstSchedulerArgs): Promise<Scheduler | null>;
}
