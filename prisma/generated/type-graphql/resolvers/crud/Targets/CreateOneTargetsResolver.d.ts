import { GraphQLResolveInfo } from "graphql";
import { CreateOneTargetsArgs } from "./args/CreateOneTargetsArgs";
import { Targets } from "../../../models/Targets";
export declare class CreateOneTargetsResolver {
    createOneTargets(ctx: any, info: GraphQLResolveInfo, args: CreateOneTargetsArgs): Promise<Targets>;
}
