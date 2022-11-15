import { GraphQLResolveInfo } from "graphql";
import { FindFirstRewardsOrThrowArgs } from "./args/FindFirstRewardsOrThrowArgs";
import { Rewards } from "../../../models/Rewards";
export declare class FindFirstRewardsOrThrowResolver {
    findFirstRewardsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstRewardsOrThrowArgs): Promise<Rewards | null>;
}
