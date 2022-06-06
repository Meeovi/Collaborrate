import { GraphQLResolveInfo } from "graphql";
import { DeleteManyReward_pointsArgs } from "./args/DeleteManyReward_pointsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyReward_pointsResolver {
    deleteManyReward_points(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReward_pointsArgs): Promise<AffectedRowsOutput>;
}
