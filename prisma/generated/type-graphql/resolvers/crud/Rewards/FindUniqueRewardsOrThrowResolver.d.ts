import { GraphQLResolveInfo } from "graphql";
import { FindUniqueRewardsOrThrowArgs } from "./args/FindUniqueRewardsOrThrowArgs";
import { Rewards } from "../../../models/Rewards";
export declare class FindUniqueRewardsOrThrowResolver {
    findUniqueRewardsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRewardsOrThrowArgs): Promise<Rewards | null>;
}
