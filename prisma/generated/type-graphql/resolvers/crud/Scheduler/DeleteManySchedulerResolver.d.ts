import { GraphQLResolveInfo } from "graphql";
import { DeleteManySchedulerArgs } from "./args/DeleteManySchedulerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySchedulerResolver {
    deleteManyScheduler(ctx: any, info: GraphQLResolveInfo, args: DeleteManySchedulerArgs): Promise<AffectedRowsOutput>;
}
