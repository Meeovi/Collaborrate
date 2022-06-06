import { GraphQLResolveInfo } from "graphql";
import { UpsertTargetsArgs } from "./args/UpsertTargetsArgs";
import { Targets } from "../../../models/Targets";
export declare class UpsertTargetsResolver {
    upsertTargets(ctx: any, info: GraphQLResolveInfo, args: UpsertTargetsArgs): Promise<Targets>;
}
