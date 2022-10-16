import { GraphQLResolveInfo } from "graphql";
import { UpdateManySchedulerArgs } from "./args/UpdateManySchedulerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySchedulerResolver {
    updateManyScheduler(ctx: any, info: GraphQLResolveInfo, args: UpdateManySchedulerArgs): Promise<AffectedRowsOutput>;
}
