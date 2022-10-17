import { GraphQLResolveInfo } from "graphql";
import { FindFirstTargetsArgs } from "./args/FindFirstTargetsArgs";
import { Targets } from "../../../models/Targets";
export declare class FindFirstTargetsResolver {
    findFirstTargets(ctx: any, info: GraphQLResolveInfo, args: FindFirstTargetsArgs): Promise<Targets | null>;
}
