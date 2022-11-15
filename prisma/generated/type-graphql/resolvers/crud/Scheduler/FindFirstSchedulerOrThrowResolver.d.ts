import { GraphQLResolveInfo } from "graphql";
import { FindFirstSchedulerOrThrowArgs } from "./args/FindFirstSchedulerOrThrowArgs";
import { Scheduler } from "../../../models/Scheduler";
export declare class FindFirstSchedulerOrThrowResolver {
    findFirstSchedulerOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstSchedulerOrThrowArgs): Promise<Scheduler | null>;
}
