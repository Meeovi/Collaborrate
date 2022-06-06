import { GraphQLResolveInfo } from "graphql";
import { UpdateManyReward_pointsArgs } from "./args/UpdateManyReward_pointsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyReward_pointsResolver {
    updateManyReward_points(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReward_pointsArgs): Promise<AffectedRowsOutput>;
}
