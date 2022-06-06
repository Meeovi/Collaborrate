import { GraphQLResolveInfo } from "graphql";
import { CreateManyRewardsArgs } from "./args/CreateManyRewardsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyRewardsResolver {
    createManyRewards(ctx: any, info: GraphQLResolveInfo, args: CreateManyRewardsArgs): Promise<AffectedRowsOutput>;
}
