import { GraphQLResolveInfo } from "graphql";
import { CreateTargetsArgs } from "./args/CreateTargetsArgs";
import { Targets } from "../../../models/Targets";
export declare class CreateTargetsResolver {
    createTargets(ctx: any, info: GraphQLResolveInfo, args: CreateTargetsArgs): Promise<Targets>;
}
