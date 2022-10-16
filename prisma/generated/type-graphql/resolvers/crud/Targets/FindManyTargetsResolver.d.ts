import { GraphQLResolveInfo } from "graphql";
import { FindManyTargetsArgs } from "./args/FindManyTargetsArgs";
import { Targets } from "../../../models/Targets";
export declare class FindManyTargetsResolver {
    findManyTargets(ctx: any, info: GraphQLResolveInfo, args: FindManyTargetsArgs): Promise<Targets[]>;
}
