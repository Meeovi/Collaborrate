import { GraphQLResolveInfo } from "graphql";
import { CreateManyReward_pointsArgs } from "./args/CreateManyReward_pointsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyReward_pointsResolver {
    createManyReward_points(ctx: any, info: GraphQLResolveInfo, args: CreateManyReward_pointsArgs): Promise<AffectedRowsOutput>;
}
