import { GraphQLResolveInfo } from "graphql";
import { FindManySchedulerArgs } from "./args/FindManySchedulerArgs";
import { Scheduler } from "../../../models/Scheduler";
export declare class FindManySchedulerResolver {
    schedulers(ctx: any, info: GraphQLResolveInfo, args: FindManySchedulerArgs): Promise<Scheduler[]>;
}
