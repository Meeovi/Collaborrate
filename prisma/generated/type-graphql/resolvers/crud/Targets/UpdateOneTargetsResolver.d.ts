import { GraphQLResolveInfo } from "graphql";
import { UpdateOneTargetsArgs } from "./args/UpdateOneTargetsArgs";
import { Targets } from "../../../models/Targets";
export declare class UpdateOneTargetsResolver {
    updateOneTargets(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTargetsArgs): Promise<Targets | null>;
}
