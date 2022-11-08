import { GraphQLResolveInfo } from "graphql";
import { CreateManySchedulerArgs } from "./args/CreateManySchedulerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySchedulerResolver {
    createManyScheduler(ctx: any, info: GraphQLResolveInfo, args: CreateManySchedulerArgs): Promise<AffectedRowsOutput>;
}
