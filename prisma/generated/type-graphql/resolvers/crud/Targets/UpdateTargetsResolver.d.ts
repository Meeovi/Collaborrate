import { GraphQLResolveInfo } from "graphql";
import { UpdateTargetsArgs } from "./args/UpdateTargetsArgs";
import { Targets } from "../../../models/Targets";
export declare class UpdateTargetsResolver {
    updateTargets(ctx: any, info: GraphQLResolveInfo, args: UpdateTargetsArgs): Promise<Targets | null>;
}
