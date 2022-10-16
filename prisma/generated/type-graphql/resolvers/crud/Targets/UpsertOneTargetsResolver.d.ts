import { GraphQLResolveInfo } from "graphql";
import { UpsertOneTargetsArgs } from "./args/UpsertOneTargetsArgs";
import { Targets } from "../../../models/Targets";
export declare class UpsertOneTargetsResolver {
    upsertOneTargets(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTargetsArgs): Promise<Targets>;
}
