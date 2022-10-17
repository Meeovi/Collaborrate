import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTargetsArgs } from "./args/FindUniqueTargetsArgs";
import { Targets } from "../../../models/Targets";
export declare class FindUniqueTargetsResolver {
    findUniqueTargets(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTargetsArgs): Promise<Targets | null>;
}
