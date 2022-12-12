import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSchedulerArgs } from "./args/FindUniqueSchedulerArgs";
import { Scheduler } from "../../../models/Scheduler";
export declare class FindUniqueSchedulerResolver {
    scheduler(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSchedulerArgs): Promise<Scheduler | null>;
}
