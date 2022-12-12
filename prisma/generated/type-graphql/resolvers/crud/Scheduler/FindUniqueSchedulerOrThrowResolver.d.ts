import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSchedulerOrThrowArgs } from "./args/FindUniqueSchedulerOrThrowArgs";
import { Scheduler } from "../../../models/Scheduler";
export declare class FindUniqueSchedulerOrThrowResolver {
    getScheduler(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSchedulerOrThrowArgs): Promise<Scheduler | null>;
}
