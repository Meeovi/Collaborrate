import { GraphQLResolveInfo } from "graphql";
import { CreateOneSchedulerArgs } from "./args/CreateOneSchedulerArgs";
import { Scheduler } from "../../../models/Scheduler";
export declare class CreateOneSchedulerResolver {
    createOneScheduler(ctx: any, info: GraphQLResolveInfo, args: CreateOneSchedulerArgs): Promise<Scheduler>;
}
